import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Conversation } from "src/conversation/entities/conversation.entity";
import { Group } from "src/group/entities/group.entity";
import { Member } from "src/group/entities/members.entity";



@ObjectType()
export class User {
  @Field()
  id: string;

  @Field()
  username: string;

  @Field()
  email: string;
 
  @Field()
  picture: string;

  @Field(() => [Group])
  createdGroups: Group[];

  @Field(() => [Member])
  members: Member[];

  @Field(() => [Conversation])
  conversationsInitiated: Conversation[];

  @Field(() => [Conversation])
  conversationsReceived: Conversation[]
}