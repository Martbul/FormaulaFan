import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { CursorPaginationInput } from './dto/cursorPaginatedPost-input';

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
      include: {
        author: true,
      },
    });

    return post;
  }

  async findAll() {
    const allPosts = await this.prisma.post.findMany({
      include: {
        author: true,
        comments: {
          include: {
            author: true,
            post: true,
          },
        },
      },
    });

    return allPosts;
  }

  async getPaginatedPosts(paginationInput: CursorPaginationInput) {
    const { cursor, limit } = paginationInput;

    let posts;
    if (cursor) {
      // Fetch posts with random order starting after the cursor
      posts = await this.prisma.post.findMany({
        take: limit,
        skip: 1, // Skip the cursor item
        cursor: { id: cursor },
        orderBy: {
          // Using the createdAt field to ensure consistency
          createdAt: 'desc',
        },
        include: {
          author: true,
          comments: {
            include: {
              author: true,
              post: true,
            },
          },
        },
      });
    } else {
      // Fetch random posts
      posts = await this.prisma.post.findMany({
        take: limit,
        orderBy: {
          // Using a random order
          createdAt: 'desc',
        },
        include: {
          author: true,
          comments: {
            include: {
              author: true,
              post: true,
            },
          },
        },
      });
    }

    return posts;
  }
}
