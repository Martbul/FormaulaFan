import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

@InputType()
export class SignInInput {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @Field()
  email: string;
  
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @Field()
 password: string;
}

