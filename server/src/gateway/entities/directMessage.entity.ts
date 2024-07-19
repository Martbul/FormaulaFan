import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/auth/entities/user.entity';
import { Conversation } from '../../conversation/entities/conversation.entity';

@ObjectType()
export class DirectMessage {
  @Field()
  id: string;

  @Field()
  content: string;

  @Field({ nullable: true })
  fileUrl?: string;

  @Field()
  deleted: boolean;

  @Field(() => User)
  user: User;

  @Field(() => Conversation)
  conversation: Conversation;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
