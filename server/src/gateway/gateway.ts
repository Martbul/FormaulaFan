   import { OnModuleInit } from '@nestjs/common';
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',  
  },
})
export class WebsocketGateway implements OnModuleInit {
  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log(socket.id);
      console.log('Connected');
      
      
    })
  }
  
  @SubscribeMessage('newMessage')
  handleMessage(@MessageBody() data: string): void {
    console.log(data);
    this.server.emit("onMessage", {
      msg: "New Message",
      content:data
    })
    
  }
}
// export class WebsocketGateway {
//   @WebSocketServer()
//   server: Server;

//   @SubscribeMessage('message')
//   handleMessage(@MessageBody() data: string): void {
//     this.server.emit('message', data); // Broadcasts 'message' event to all connected clients
//   }
// }
