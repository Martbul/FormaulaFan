import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DeletePostResponse {
  @Field()
  success: boolean;

  @Field()
  message: string;
}
