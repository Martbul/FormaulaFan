import { InputType, Field } from '@nestjs/graphql';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateChannelInput {
  @IsNotEmpty()
  @IsString()
  @Field()
  channelType: 'TEXT' | 'VOICE';

  @IsNotEmpty()
  @IsString()
  @Field()
  channelName: string;

  @IsNotEmpty()
  @Field()
  @IsBoolean()
  isPrivate: boolean;

  @IsNotEmpty()
  @IsString()
  @Field()
  groupId: string;
}
