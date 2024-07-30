import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { CursorPaginationInput } from './dto/cursorPaginatedPost-input';
import { LikeDislikePostInput } from './dto/like-dislike-post.input';
import { AddCommentToPostInput } from './dto/add-comment-to-post.input';
import { SaveUnsavePostInput } from './dto/save-unsave';

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
          likedBy: true,
          savedBy: true,
          sharedBy: true,
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
          likedBy: true,
          savedBy: true,
          sharedBy: true,
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

  async likeDislike(likeDislikePostInput: LikeDislikePostInput) {
    const { postId, userId, isLiked } = likeDislikePostInput;

    if (isLiked) {
      await this.prisma.post.update({
        where: { id: postId },
        data: {
          likedBy: {
            disconnect: { id: userId },
          },
        },
      });

      return 'Post was disliked';
    } else {
      await this.prisma.post.update({
        where: { id: postId },
        data: {
          likedBy: {
            connect: { id: userId },
          },
        },
      });
      return 'Post was liked';
    }
  }


  async saveUnsave(saveUnsavePostInput: SaveUnsavePostInput) {
    const { postId, userId, isSaved } = saveUnsavePostInput;

    if (isSaved) {
      await this.prisma.post.update({
        where: { id: postId },
        data: {
          savedBy: {
            disconnect: { id: userId },
          },
        },
      });

      return 'Post was unsaved';
    } else {
      await this.prisma.post.update({
        where: { id: postId },
        data: {
          savedBy: {
            connect: { id: userId },
          },
        },
      });
      return 'Post was saved';
    }
  }

  async addCommentToPost(addCommnetToPostInput: AddCommentToPostInput) {
    const { textContent, userEmail, postId, imageContentUrl } = addCommnetToPostInput;
    
    const user = await this.prisma.user.findUnique({
      where: { email: userEmail },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const comment = await this.prisma.comment.create({
      data: {
        textContent,
        imageContentUrl,
        authorId: user.id,
        postId,
      }
    })
    return comment

  };


  async getSinglePost(id: string) {
    const singlePost = await this.prisma.post.findUnique({
      where: { id: id },
      include: {
        author: true,
        likedBy: true,
        savedBy: true,
        sharedBy: true,
        comments: {
          include: {
            author: true,
            post: true,
          },
        },
      },
    });
    return singlePost
  }
 
 
  async getUserSavedPosts(userEmail: string) {
    const user = await this.prisma.user.findUnique({
      where: { email: userEmail },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }
    const userSavedPosts = await this.prisma.user.findUnique({
      where: {id:user.id},
      include: {
        savedPosts:{
          include: {
            author: true,
            likedBy: true,
            savedBy: true,
            sharedBy: true,
            comments: {
                  include: {
                    author: true,
                    post: true,
                  },
                },
          }
        }
      }
    });
    
    return userSavedPosts.savedPosts
  }
}
