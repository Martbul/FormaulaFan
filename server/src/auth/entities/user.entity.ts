import { Field, ObjectType } from "@nestjs/graphql";
import { Conversation } from "src/conversation/entities/conversation.entity";
import { DirectMessage } from "src/gateway/entities/directMessage.entity";
import { Group } from "src/group/entities/group.entity";
import { Member } from "src/group/entities/members.entity";
import { Post } from "src/post/entities/post.entity";
import { UserSettings } from "./userSetting.entity";
import { Comment } from "src/post/entities/comment.entity";


@ObjectType()
export class User {
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
