import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CursorPaginationInput {
  @Field( { nullable: true })
  cursor?: string;

  @Field(() => Int, { defaultValue: 10 })
  limit: number;
}
