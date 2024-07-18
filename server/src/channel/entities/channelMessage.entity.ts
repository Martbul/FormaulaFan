import { Field, ObjectType } from '@nestjs/graphql';
import { Member } from 'src/group/entities/members.entity';
import { Channel } from './channel.entity';


@ObjectType()
export class Message {
  @Field()
  id: string;

  @Field()
  content: string;

  @Field({ nullable: true })
  fileUrl?: string;

  @Field()
  deleted: boolean;

  @Field(() => Member)
  member: Member;

  @Field(() => Channel)
  channel: Channel;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
