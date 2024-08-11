import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Update3dAvatar } from './dto/update3davatar.input';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}
  async findOne(email: string) {
    const userProfile = await this.prisma.user.findUnique({
      where: { email: email },
      include: {
        posts: {
          include: {
            comments: {
              include: {
                post: true,
                author: true,
              },
            },
            likedBy: true,
            savedBy: true,
            sharedBy: true,
            author:true
          },
        },
        favorites: {
          include: {
            comments: {
              include: {
                post: true,
                author: true,
              },
            },
            likedBy: true,
            savedBy: true,
            sharedBy: true,
            author:true
          },
        },
        following:true,
        followedBy:true,
        conversationsInitiated: {
          include: {
            userOne: true,
            userTwo: true,
          },
        },
        conversationsReceived: {
          include: {
            userOne: true,
            userTwo: true,
          },
        },
        members: {
          include: {
            group: true,
          },
        },
        createdGroups: true,
      },
    });

    if (!userProfile) {
      throw new NotFoundException('User not found');
    }

    return userProfile;
  }

  async get3dAvatar(userEmail: string) {
     const user = await this.prisma.user.findUnique({
       where: { email: userEmail },
       include: {
         avatar3D:true
       },
     });
     if (!user) {
       throw new NotFoundException('User not found');
     }
     console.log("3DAVATAR",user.avatar3D);
     return user.avatar3D
  }
  
  
  async update3DAvatar(update3dAvatar: Update3dAvatar) {
     const user = await this.prisma.user.findUnique({
       where: { email: update3dAvatar.userEmail },
       include: {
         avatar3D:true
       },
     });
     if (!user) {
       throw new NotFoundException('User not found');
    }
    const updated3dAvatar = await this.prisma.user.update({
      where: { email: update3dAvatar.userEmail },
      include: {
        avatar3D: true,
      },
      data: {
        avatar3D: {
          update: {
            suitColor: update3dAvatar.suitColor,
            helmetColor: update3dAvatar.helmetColor,
            glovesColor: update3dAvatar.glovesColor,
          },
        },
      },
    });
     console.log("3DAVATAR",user.avatar3D);
     return updated3dAvatar.avatar3D;
  }
}
