import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateMessageDto {
  @IsNotEmpty()
  @IsString()
  @Field()
  senderUsername: string;
  
   @IsNotEmpty()
  @IsString()
  @Field()
  senderEmail: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  content: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  chatChannelId: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  groupId: string;
}
