import { StartConversationInput } from './start-conversation.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateConversationInput extends PartialType(
  StartConversationInput,
) {
  @Field(() => Int)
  id: number;
}
