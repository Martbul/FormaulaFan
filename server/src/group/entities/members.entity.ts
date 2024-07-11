import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/auth/entities/user.entity';
import { Group } from './group.entity'; // Adjust the import path accordingly

@ObjectType()
export class Member {
  @Field()
  id: string;

  @Field()
  role: string;

  @Field(() => User)
  user: User;

  @Field(() => Group)
  group: Group;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
