import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';
import { CursorPaginationInput } from './dto/cursorPaginatedPost-input';
import { LikeDislikePostInput } from './dto/like-dislike-post.input';
import { Comment } from './entities/comment.entity';
import { AddCommentToPostInput } from './dto/add-comment-to-post.input';
import { SaveUnsavePostInput } from './dto/save-unsave';

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
  
  @Mutation(() => String)
  saveUnsave(
    @Args('saveUnsavePostInput') saveUnsavePostInput: SaveUnsavePostInput,
  ) {
    return this.postService.saveUnsave(saveUnsavePostInput);
  }

  @Mutation(() => Comment)
  addedComment(
    @Args('addCommnetToPostInput') addCommnetToPostInput: AddCommentToPostInput,
  ) {
    return this.postService.addCommentToPost(addCommnetToPostInput);
  }

  @Query(() => [Post])
  paginatedPosts(
    @Args('paginationInput', { type: () => CursorPaginationInput })
    paginationInput: CursorPaginationInput,
  ) {
    return this.postService.getPaginatedPosts(paginationInput);
  }


  @Query(() => Post)
  singlePost(
    @Args('id') id: string,
    
  ) {
    return this.postService.getSinglePost(id);
  }
  
  
  @Query(() => [Post])
  userSavedPosts( @Args('userEmail') userEmail: string) {
    console.log(userEmail) 
    return this.postService.getUserSavedPosts(userEmail);
  }
}



