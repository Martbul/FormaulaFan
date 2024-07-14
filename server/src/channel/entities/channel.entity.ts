import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/auth/entities/user.entity';
import { Group } from 'src/group/entities/group.entity';

@ObjectType()
export class Channel {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  type: 'TEXT' | 'VOICE';

  @Field()
  isPrivate: boolean;

  // @Field(() => User)
  // user: User;

  @Field(() => Group)
  group: Group;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
