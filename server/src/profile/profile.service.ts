import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

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

    console.log(userProfile);
    return userProfile;
  }
}
