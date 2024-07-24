import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class AddCommentToPostInput {
  @IsNotEmpty()
  @IsString()
  @Field()
  textContent: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  postId: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  imageContentUrl?: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  userEmail: string;
}
