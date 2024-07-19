import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
interface Message {
  sender: string;
  content: string;
  room?: string;
  recipient?: string;
}
@WebSocketGateway({
  cors: {
    origin: '*', // Allow all origins, you can specify specific origins instead of '*'
  },
})
export class DirectGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  // Map to store user IDs and their corresponding socket IDs
  private userSocketMap = new Map<string, string>();

  handleConnection(client: Socket) {
    const userId = client.handshake.query.userId as string;
    this.userSocketMap.set(userId, client.id);
    console.log(`Client connected: ${client.id} (User ID: ${userId})`);
  }

  handleDisconnect(client: Socket) {
    const userId = Array.from(this.userSocketMap.entries()).find(
      ([_, socketId]) => socketId === client.id,
    )?.[0];
    if (userId) {
      this.userSocketMap.delete(userId);
    }
    console.log(`Client disconnected: ${client.id} (User ID: ${userId})`);
  }

  @SubscribeMessage('directMessage')
  handleDirectMessage(
    @MessageBody() data: Message,
    @ConnectedSocket() client: Socket,
  ): void {
    const { recipient, content, sender } = data;
    const message = { sender, content };

    if (recipient) {
      // Get recipient's socket ID from the map
      const recipientSocketId = this.userSocketMap.get(recipient);
      console.log(`Recipient Socket ID: ${recipientSocketId}`);

      if (recipientSocketId) {
        // Send direct message to the specific recipient
        this.server.to(recipientSocketId).emit('message', message);
        // Also emit the message back to the sender
        client.emit('message', message);
        console.log(
          `Client ${client.id} (User ID: ${sender}) sent direct message to ${recipientSocketId} (User ID: ${recipient})`,
        );
      }
    }
  }
}
