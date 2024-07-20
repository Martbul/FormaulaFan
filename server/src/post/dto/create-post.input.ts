import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreatePostInput {
  @IsNotEmpty()
  @IsString()
  @Field()
  textContent: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  imageContentUrl: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  userEmail: string;
}
