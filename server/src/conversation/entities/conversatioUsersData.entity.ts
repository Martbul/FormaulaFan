import { ObjectType, Field } from '@nestjs/graphql';
import { Conversation } from './conversation.entity';
import { User } from 'src/auth/entities/user.entity';

@ObjectType()
export class ConversationData {
  @Field(() => Conversation)
  conversation: Conversation;

  @Field(() => User)
  currentUser: User;

  @Field(() => User)
  conversationUser: User;
}
