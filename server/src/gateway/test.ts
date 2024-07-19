// import {
//   WebSocketGateway,
//   WebSocketServer,
//   SubscribeMessage,
//   MessageBody,
//   ConnectedSocket,
//   OnGatewayConnection,
//   OnGatewayDisconnect,
// } from '@nestjs/websockets';
// import { Server, Socket } from 'socket.io';
// import { GroupMessagesService } from './groupMessages.service';
// import { CreateMessageDto } from './dto/create-message.dto';

// @WebSocketGateway({
//   cors: {
//     origin: '*',
//   },
// })
// export class GroupMessagesGateWay {
//   @WebSocketServer()
//   server: Server;

//   constructor(private readonly groupMessagesService: GroupMessagesService) {}

//   @SubscribeMessage('createGroupMessage')
//   async create(@MessageBody() createMessageDto: CreateMessageDto) {
//     console.log(createMessageDto);
    
//     const newMessage = await this.groupMessagesService.create(createMessageDto);

//     this.server.emit('getGroupMessage', newMessage)
//     return newMessage

//   }

//   @SubscribeMessage('typing')
//   async typing(@MessageBody("isTyping") isTyping: boolean, @ConnectedSocket() client: Socket) {
    
//   }
// }
