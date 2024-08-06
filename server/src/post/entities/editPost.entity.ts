import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class EditPostResponse {
  @Field()
  success: boolean;
}
