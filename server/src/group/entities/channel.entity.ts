import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/auth/entities/user.entity';
import { Group } from './group.entity'; 

@ObjectType()
export class Channel {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  type: string;

  @Field(() => User)
  user: User;

  @Field(() => Group)
  group: Group;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
