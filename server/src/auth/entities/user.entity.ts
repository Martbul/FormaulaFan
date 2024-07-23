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
  picture?: string; // Optional field, might not be set for all users

  @Field(() => String)
  password: string; // Consider the security implications of exposing this field

  @Field({ nullable: true })
  hashedRefreshToken?: string; // Optional field

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => [Post])
  posts: Post[];

  @Field(() => [Post])
  likedPosts: Post[];

  @Field(() => [Post])
  sharedPosts: Post[];

  @Field(() => [Post])
  savedPosts: Post[];

  @Field(() => [Comment])
  comments: Comment[];

  @Field(() => [Conversation])
  conversationsInitiated: Conversation[];

  @Field(() => [Conversation])
  conversationsReceived: Conversation[];

  @Field(() => [DirectMessage])
  directMessages: DirectMessage[];

  @Field(() => UserSettings, { nullable: true })
  settings?: UserSettings; // Optional field

  @Field(() => [Group])
  createdGroups: Group[];

  @Field(() => [Member])
  members: Member[];
}
