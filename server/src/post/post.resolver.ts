import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';
import { CursorPaginationInput } from './dto/cursorPaginatedPost-input';
import { LikeDislikePostInput } from './dto/like-dislike-post.input';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation(() => Post)
  newPost(@Args('createPostInput') createPostInput: CreatePostInput) {
    return this.postService.create(createPostInput);
  }

  @Mutation(() => String)
  likeDislike(
    @Args('likeDislikePostInput') likeDislikePostInput: LikeDislikePostInput,
  ) {
    return this.postService.likeDislike(likeDislikePostInput);
  }

  @Query(() => [Post])
  paginatedPosts(
    @Args('paginationInput', { type: () => CursorPaginationInput })
    paginationInput: CursorPaginationInput,
  ) {
    return this.postService.getPaginatedPosts(paginationInput);
  }
}



