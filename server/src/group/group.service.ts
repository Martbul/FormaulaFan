import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGroupInput } from './dto/createGroup/create-group.input';
import { UpdateGroupInput } from './dto/updateGroup/update-group.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GroupService {
  constructor(private prisma: PrismaService) {}

  async createGroup(createGroupInput: CreateGroupInput) {
    console.log(createGroupInput);

    const user = await this.prisma.user.findUnique({
      where: { email: createGroupInput.email },
      include: {
        createdGroups: true,
      },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const group = await this.prisma.group.create({
      data: {
        name: `${user.username}'s Group ${user.createdGroups.length + 1}`,
        imageUrl: 'https://example.com/default-image.jpg',
        inviteCode: 'WORKING ON IT',
        creator: {
          connect: { id: user.id },
        },
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
              isPrivate: false,
            },
          ],
        },
        settings: {
          create: {
            allowComments: true,
            isPrivate: false,
          },
        },
      },
      include: {
        creator: true,
        members: {
          include: {
            user: true,
          },
        },
        channels: true,
        settings: true,
      },
    });

    return group;
  }

  async findAll() {
    const allGroups = await this.prisma.group.findMany({
      include: {
        creator: true,
        members: {
          include: {
            user: true,
            group: true,
          },
        },
        channels: true,
      },
    });
    return allGroups;
  }

  async findOne(id: string) {
    const group = await this.prisma.group.findUnique({
      where: {
        id,
      },
      include: {
        members: {
          include: {
            user: true,
          },
        },
        channels: true,
      },
    });
    if (!group) {
      throw new NotFoundException('Group dosnt exist');
    }

    return group;
  }

  update(id: number, updateGroupInput: UpdateGroupInput) {
    return `This action updates a #${id} group`;
  }

  remove(id: number) {
    return `This action removes a #${id} group`;
  }
}
