import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/auth/entities/user.entity';
import { Channel } from 'src/channel/entities/channel.entity';

import { Member } from 'src/group/entities/members.entity';


@ObjectType()
export class CreateGroupResponse {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  imageUrl: string;

  @Field(() => User)
  creator: User;

  @Field(() => [Member])
  members: Member[];

  @Field(() => [Channel], {nullable:true})
  channels?: Channel[];
}
