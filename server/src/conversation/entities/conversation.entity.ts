import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/auth/entities/user.entity';
import { DirectMessage } from '../../gateway/entities/directMessage.entity';

@ObjectType()
export class Conversation {
  @Field()
  id: string;

  @Field(() => [DirectMessage])
  directMessages: DirectMessage[];

  @Field(() => User)
  userOne: User;

  @Field(() => User)
  userTwo: User;
}
