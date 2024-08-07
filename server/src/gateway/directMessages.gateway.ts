import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

import { DirectMessagesService } from './directMessages.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class DirectMessagesGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  private directConversationClients: Map<string, Set<string>> = new Map();
  private directsConversationMessages: Map<
    string,
    { content: string; sender: string }[]
  > = new Map();

  constructor(private readonly directMessagesService: DirectMessagesService) {}

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
    this.removeClientFromChannels(client);
  }

  private removeClientFromChannels(client: Socket) {
    this.directConversationClients.forEach((clients, channel) => {
      if (clients.has(client.id)) {
        clients.delete(client.id);
        // Optionally emit to clients in the channel that a user has left
        this.server.to(channel).emit('userLeft', client.id);
      }
      if (clients.size === 0) {
        this.directConversationClients.delete(channel);
        this.directConversationClients.delete(channel); // Remove message history when no clients in channel
      }
    });
  }

  @SubscribeMessage('joinDirectChat')
  handleJoinChannel(client: Socket, directConversatinoId: string) {
    client.join(directConversatinoId);
    if (!this.directConversationClients.has(directConversatinoId)) {
      this.directConversationClients.set(directConversatinoId, new Set());
      this.directsConversationMessages.set(directConversatinoId, []);
    }
    this.directConversationClients.get(directConversatinoId).add(client.id);

    // Send message history to the client joining the channel
    const messages = this.directsConversationMessages.get(directConversatinoId);
    client.emit('messageHistory', messages);

    console.log(`Client ${client.id} joined channel ${directConversatinoId}`);
  }

  @SubscribeMessage('sendDirectChatMessage')
  async handleSendMessage(
    client: Socket,
    message: {
      senderUsername: string;
      senderEmail: string;
      content: string;
      directConversatinoId: string;
      recipientId: string;
    },
  ) {
    const {
      senderUsername,
      senderEmail,
      directConversatinoId,
      content,
      recipientId,
    } = message;


    try {
      const createMessageDto = {
        senderUsername,
        content,
        directConversatinoId,
        senderEmail,
        recipientId,
      };

      //! move the saving of new message below the emit, that way it will appear faster the messages to the screen but if error -> bad
      //! and use Redis
      const newDirectChatMessage =
        await this.directMessagesService.create(createMessageDto);

      // Emit the new message to all clients in the channel
      this.server
        .to(directConversatinoId)
        .emit('directMessage', newDirectChatMessage);
    } catch (error) {
      console.error('Error handling directMessage:', error);
    }
  }
}
