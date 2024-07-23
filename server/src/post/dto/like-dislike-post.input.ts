
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';
@InputType()
export class LikeDislikePostInput {
  @IsNotEmpty()
  @IsString()
  @Field()
  postId: string;

  @IsString()
  @Field()
  userId: string;

  @IsNotEmpty()
  @Field()
  isLiked: boolean;
}
