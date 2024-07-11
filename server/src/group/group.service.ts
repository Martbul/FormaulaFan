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
        members: true,
        channels: true,
      },
    });
console.log(group);

    return group

  }

  findAll() {
    return `This action returns all group`;
  }

  findOne(id: number) {
    return `This action returns a #${id} group`;
  }

  update(id: number, updateGroupInput: UpdateGroupInput) {
    return `This action updates a #${id} group`;
  }

  remove(id: number) {
    return `This action removes a #${id} group`;
  }
}
