
  // async startCoversation(startConversationInput: StartConversationInput) {
  //   const memberOne = await this.prisma.member.findFirst({
  //     where: {
  //       user: {
  //         email: startConversationInput.memberOneEmail,
  //       },
  //     },
  //     include: {
  //       user: true,
  //     },
  //   });

  //   if (!memberOne) {
  //     throw new NotFoundException('member one was not found');
  //   }

  //   if (memberOne.id === startConversationInput.memberTwoId) {
  //     throw new BadRequestException('cannot message yourself')
  //   }

  //   const existingConversation = await this.prisma.conversation.findUnique({
  //     where: {
  //       memberOneId_memberTwoId: {
  //         memberOneId: memberOne.id,
  //         memberTwoId: startConversationInput.memberTwoId,
  //       },
  //     },
  //     include: {
  //       memberOne: true,
  //       memberTwo: true,
  //     },
  //   });
    
  //   if (existingConversation) {
  //       console.log(existingConversation);
  //     console.log('Conversation already exists');
  //     return existingConversation
      
  //   }

  //   const createConversation = await this.prisma.conversation.create({
  //     data: {
  //       memberOneId: memberOne.id,
  //       memberTwoId: startConversationInput.memberTwoId,
  //     },
  //     include: {
  //       memberOne: true,
  //       memberTwo: true,
  //     },
  //   });

  //   console.log(createConversation);
    

  //   return createConversation;
  // } 

import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { StartConversationInput } from './dto/start-conversation.input';
import { UpdateConversationInput } from './dto/update-conversation.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ConversationService {
   constructor(
    private prisma: PrismaService,
  ) {}
  async startCoversation(startConversationInput: StartConversationInput) {
    const memberOne = await this.prisma.user.findUnique({
      where: {
        email: startConversationInput.userOneEmail,
      },
    });

    if (!memberOne) {
      throw new NotFoundException('member one was not found');
    }

    if (memberOne.id === startConversationInput.userTwoId) {
      throw new BadRequestException('cannot message yourself')
    }

    console.log(memberOne.id, startConversationInput.userTwoId);

    const existingConversation = await this.prisma.conversation.findUnique({
      where: {
        userOneId_userTwoId: {
          userOneId: memberOne.id,
          userTwoId: startConversationInput.userTwoId,
        },
      },
      include: {
        userOne: true,
        userTwo: true,
      },
    });
    
    if (existingConversation) {
        console.log(existingConversation);
      console.log('Conversation already exists');
      return existingConversation
      
    }

    const createConversation = await this.prisma.conversation.create({
      data: {
        userOneId: memberOne.id,
        userTwoId: startConversationInput.userTwoId,
      },
      include: {
        userOne:true,
        userTwo: true,
      },
    });

    console.log(createConversation);
    

    return createConversation;
  } 
  //! DATA I WILL NEED: ...
  //! when returning the converation must include user names, id and all data neede to cojntinue in the directMessags



  findAll() {
    return `This action returns all conversation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} conversation`;
  }

  update(id: number, updateConversationInput: UpdateConversationInput) {
    return `This action updates a #${id} conversation`;
  }

  remove(id: number) {
    return `This action removes a #${id} conversation`;
  }
}
