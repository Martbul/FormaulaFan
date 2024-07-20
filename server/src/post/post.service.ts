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

    //! imageContentUrl може да e null/undefined/"" - помисли как ще го направих(включително и за createPostInput както и за gql във фронтенда )
    // const post = await this.prisma.post.create({
    //   data: {
    //     textContent: createPostInput.textContent,
    //     imageContentUrl: createPostInput.textContent,
    //   },
    // });
  }
}
