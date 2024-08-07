import { Injectable } from '@nestjs/common';
import { CreateChannelInput } from './dto/create-message.input';
import { UpdateChannelInput } from './dto/update-channel.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChannelService {
  constructor(private prisma: PrismaService) {}

  async create(createChannelInput: CreateChannelInput) {
    const channel = await this.prisma.channel.create({
      data: {
        name: createChannelInput.channelName,
        type: createChannelInput.channelType,
        isPrivate: createChannelInput.isPrivate,
        groupId: createChannelInput.groupId,
      },
      include: {
        group: true,
      },
    });

    return channel;
  }

  findAll() {
    return `This action returns all channel`;
  }

  async findOne(id: string) {
    const channel = await this.prisma.channel.findUnique({
      where: {
       id:id
      },
      include: {
        messages:{
          include: {
            member: {
              include: {
                user:true
              }
            }
          }
        }
      }
    })
    
   return channel
  }

  update(id: number, updateChannelInput: UpdateChannelInput) {
    return `This action updates a #${id} channel`;
  }

  remove(id: number) {
    return `This action removes a #${id} channel`;
  }
}
