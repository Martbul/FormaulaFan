import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/auth/entities/user.entity';
import { Member } from './members.entity';
import { Channel } from 'src/channel/entities/channel.entity';


@ObjectType()
export class Group {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  imageUrl: string;

  @Field()
  inviteCode: string;

  @Field(() => User)
  creator: User;

  @Field(() => [Member])
  members: Member[];

  @Field(() => [Channel], { nullable: true })
  channels?: Channel[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
