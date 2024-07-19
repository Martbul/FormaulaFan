import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { GroupMessagesService } from './groupMessages.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class GroupMessagesGateWay
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  // Track connected clients in channels/groups
  private channelClients: Map<string, Set<string>> = new Map(); // channel => Set(clientId)
  private channelMessages: Map<string, { content: string; sender: string }[]> =
    new Map(); // channel => Array<Messages>

  constructor(private readonly groupMessagesService: GroupMessagesService) {}

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
    this.removeClientFromChannels(client);
  }

  private removeClientFromChannels(client: Socket) {
    this.channelClients.forEach((clients, channel) => {
      if (clients.has(client.id)) {
        clients.delete(client.id);
        // Optionally emit to clients in the channel that a user has left
        this.server.to(channel).emit('userLeft', client.id);
      }
      if (clients.size === 0) {
        this.channelClients.delete(channel);
        this.channelMessages.delete(channel); // Remove message history when no clients in channel
      }
    });
  }

  @SubscribeMessage('joinChannel')
  handleJoinChannel(client: Socket, channelId: string) {
    client.join(channelId);
    if (!this.channelClients.has(channelId)) {
      this.channelClients.set(channelId, new Set());
      this.channelMessages.set(channelId, []);
    }
    this.channelClients.get(channelId).add(client.id);

    // Send message history to the client joining the channel
    const messages = this.channelMessages.get(channelId);
    client.emit('messageHistory', messages);

    console.log(`Client ${client.id} joined channel ${channelId}`);
  }

  @SubscribeMessage('sendMessage')
  async handleSendMessage(
    client: Socket,
    message: {
      senderUsername: string;
      senderEmail: string;
      content: string;
      channelId: string;
      groupId: string;
    },
  ) {
    const { senderUsername, senderEmail, channelId, content, groupId } =
      message;
    console.log(message);

    try {
      const createMessageDto = {
        senderUsername,
        content,
        chatChannelId: channelId,
        senderEmail,
        groupId,
      };

      //! move the saving of new message below the emit, that way it will appear faster the messages to the screen but if error -> bad
      const newMessage =
        await this.groupMessagesService.create(createMessageDto);

      console.log('newMessage', newMessage);

      // Emit the new message to all clients in the channel
      this.server.to(channelId).emit('message', newMessage);
    } catch (error) {
      console.error('Error handling message:', error);
    }
  }
}



// ! this works but also should save messages to the db
// import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
// import { Server, Socket } from 'socket.io';

// @WebSocketGateway({
//   cors: {
//     origin: '*',
//   },
// })
// export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
//   @WebSocketServer()
//   server: Server;

//   // Track connected clients in channels/groups
//   private channelClients: Map<string, Set<string>> = new Map(); // channel => Set(clientId)
//   private channelMessages: Map<string, { content: string; sender: string }[]> =
//       new Map(); // channel => Array<Messages>
   
   

//   handleConnection(client: Socket) {
//     console.log(`Client connected: ${client.id}`);
//   }

//   handleDisconnect(client: Socket) {
//     console.log(`Client disconnected: ${client.id}`);
//     this.removeClientFromChannels(client);
//   }

//   private removeClientFromChannels(client: Socket) {
//     this.channelClients.forEach((clients, channel) => {
//       if (clients.has(client.id)) {
//         clients.delete(client.id);
//         // Optionally emit to clients in the channel that a user has left
//         this.server.to(channel).emit('userLeft', client.id);
//       }
//       if (clients.size === 0) {
//         this.channelClients.delete(channel);
//         this.channelMessages.delete(channel); // Remove message history when no clients in channel
//       }
//     });
//   }

//   @SubscribeMessage('joinChannel')
//   handleJoinChannel(client: Socket, channelId: string) {
//     client.join(channelId);
//     if (!this.channelClients.has(channelId)) {
//       this.channelClients.set(channelId, new Set());
//       this.channelMessages.set(channelId, []);
//     }
//     this.channelClients.get(channelId).add(client.id);

//     // Send message history to the client joining the channel
//     const messages = this.channelMessages.get(channelId);
//     client.emit('messageHistory', messages);

//     console.log(`Client ${client.id} joined channel ${channelId}`);
//   }

//   @SubscribeMessage('sendMessage')
//   handleSendMessage(
//     client: Socket,
//     message: { channelId: string; content: string },
//   ) {
//     const { channelId, content } = message;
//     const newMessage = { content, sender: client.id };
//     this.server.to(channelId).emit('message', newMessage);

//     // Store message in history
//     if (this.channelMessages.has(channelId)) {
//       const messages = this.channelMessages.get(channelId);
//       messages.push(newMessage);
//       this.channelMessages.set(channelId, messages);
//     } else {
//       this.channelMessages.set(channelId, [newMessage]);
//     }
//   }
// }
