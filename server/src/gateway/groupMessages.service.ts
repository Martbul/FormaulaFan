import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GroupMessagesService {
  constructor(private prisma: PrismaService) { }
  
  // getClientName(clientId: string) {
  //   return this.cli
  // }

  async create(createMessageDto: CreateMessageDto) {
    // Find the sender user by email
    const senderUser = await this.prisma.user.findUnique({
      where: { email: createMessageDto.senderEmail },
    });

    if (!senderUser) {
      throw new Error('User not found');
    }

    // Find the member in the group based on userId and groupId
    const senderMember = await this.prisma.member.findFirst({
      where: {
        userId: senderUser.id,
        groupId: createMessageDto.groupId,
      },
    });

    if (!senderMember) {
      throw new Error('Member not found in the specified group');
    }
    
    //! should give id of the user's member in that group
    const newMessage = await this.prisma.message.create({
      data: {
        content: createMessageDto.content,
        channel: { connect: { id: createMessageDto.chatChannelId } },
        member: { connect: { id: senderMember.id } },
      },
    });

    return newMessage;
  }
}
