import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/auth/entities/user.entity';
import { Group } from 'src/group/entities/group.entity';
import { Member } from 'src/group/entities/members.entity';
import { Message } from './channelMessage.entity';

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

  @Field(() => [Message], { nullable: true })
  messages?: Message[];

  @Field(() => Member)
  member: Member;

  @Field(() => Group)
  group: Group;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
