import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Group } from "src/group/entities/group.entity";



@ObjectType()
export class User {
  @Field()
  id: string;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field(() => [Group])
  createdGroups: Group[];
}