import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DirectMessagesService {
  constructor(private prisma: PrismaService) {}


  async create(createDirectMessageDto) {
    console.log('createDirectMessageDto', createDirectMessageDto);
    
     const senderUser = await this.prisma.user.findUnique({
       where: { email: createDirectMessageDto.senderEmail },
     });

     if (!senderUser) {
       throw new Error('User not found');
    }
    
    const newDirectMessage = await this.prisma.directMessage.create({
      data: {
        content: createDirectMessageDto.content,
        conversationId: createDirectMessageDto.directConversatinoId,
        userId: senderUser.id,
      },
    });

    const directMessageWithUserData = {
      ...newDirectMessage,
      senderId: senderUser.id,
      senderUsername: senderUser.username,
    };

     return directMessageWithUserData;
  }
  
}
