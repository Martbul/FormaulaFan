import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/auth/entities/user.entity';
import { Conversation } from 'src/conversation/entities/conversation.entity';
import { Group } from 'src/group/entities/group.entity';
import { Member } from 'src/group/entities/members.entity';
import { Post } from 'src/post/entities/post.entity';

@ObjectType()
export class Profile {
  @Field()
  id: string;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  picture?: string;

  @Field()
  cover: string;

  @Field({ nullable: true })
  bio?: string;

  @Field({ nullable: true })
  status?: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => [Post])
  posts: Post[];

  @Field(() => [Post])
  favorites: Post[];

  @Field(() => [User])
  followedBy: User[];

  @Field(() => [User])
  following: User[];

  @Field(() => [Conversation])
  conversationsInitiated: Conversation[];

  @Field(() => [Conversation])
  conversationsReceived: Conversation[];

  @Field(() => [Group])
  createdGroups: Group[];

  @Field(() => [Member])
  members: Member[];
}
