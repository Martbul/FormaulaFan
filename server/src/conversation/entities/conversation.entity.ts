import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/auth/entities/user.entity';


@ObjectType()
export class Conversation {
  @Field()
  id: string;

  @Field(() => User)
  userOne: User;

  @Field(() => User)
  userTwo: User;
}
