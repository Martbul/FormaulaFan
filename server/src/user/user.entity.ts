import { Field, Int, ObjectType } from "@nestjs/graphql";


//this represents the user object that the server will return when user signs(up and in)
@ObjectType()
export class User {
   @Field(() => Int)
   id: number;

   @Field()
   username: string;

   @Field()
   email: string; 
 }