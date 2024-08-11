import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class Update3dAvatar {
  @IsNotEmpty()
  @IsString()
  @Field()
  suitColor: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  helmetColor: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  glovesColor: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @Field()
  userEmail: string;
}
