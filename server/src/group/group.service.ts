import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGroupInput } from './dto/createGroup/create-group.input';
import { UpdateGroupInput } from './dto/updateGroup/update-group.input';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class GroupService {
  constructor(
    private prisma: PrismaService,
  ) { }
  
  async createGroup(createGroupInput: CreateGroupInput) {
    console.log(createGroupInput);
    
  const user = await this.prisma.user.findUnique({
    where: { email: createGroupInput.email },
  });
  if (!user) {
    throw new NotFoundException('User not found');
  }
    console.log('USER', user.id);
    
    const group = await this.prisma.group.create({
      data: {
        //name: `${user.username}'s Group${user.createdGroups.length}`,
        name: `${user.username}'s Group`,
        imageUrl:
          'https://t3.ftcdn.net/jpg/05/28/78/00/360_F_528780055_eQ2UYVU0YYh9bFJTLk9q2orIAkbCkSUg.jpg',
        inviteCode: "WORKING ON IT",
        creatorId: user.id,
        members: {
          create: {
            userId: user.id,
            role: 'ADMIN', 
          },
        },
        channels: {
          create: [
            {
              name: 'General',
              type: 'TEXT', 
              userId: user.id,
            }
          ],
        },
      },
      include: {
        creator:true,
        members: true,
        channels: true,
      },
    });

    return group

  }

  async findAll() {
    const allGroups = await this.prisma.group.findMany({
      include: {
        creator: true,
        members: {
          include: {
            user: true,
            group: true
          },
        },
        channels: true,
      },
    });
    return allGroups
  }

  async findOne(id: string) {
    const group = await this.prisma.group.findUnique({
      where: {
      id
      }
    })
    if (!group) {
      throw new NotFoundException("Group dosnt exist")
    }

    return group
  }

  update(id: number, updateGroupInput: UpdateGroupInput) {
    return `This action updates a #${id} group`;
  }

  remove(id: number) {
    return `This action removes a #${id} group`;
  }
}
