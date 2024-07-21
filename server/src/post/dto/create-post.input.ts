import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreatePostInput {
  @IsNotEmpty()
  @IsString()
  @Field()
  textContent: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  imageContentUrl?: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  userEmail: string;
}
