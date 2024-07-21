import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async create(createPostInput: CreatePostInput) {
    const user = await this.prisma.user.findUnique({
      where: { email: createPostInput.userEmail },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const post = await this.prisma.post.create({
      data: {
        textContent: createPostInput.textContent,
        imageContentUrl: createPostInput.imageContentUrl || null,
        authorId: user.id,
      },
      include:{
        author:true
      }
    });

    return post
  }


  async findAll() {
    const allPosts = await this.prisma.post.findMany({
      include: {
        author: true,
        comments: {
          include: {
            author: true,
            post:true
          },
        },
      },
    });
   
    
    return allPosts;
  }
}
