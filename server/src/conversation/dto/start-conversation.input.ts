import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class StartConversationInput {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @Field()
  userOneEmail: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  userTwoId: string;
}

