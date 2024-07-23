import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "./user.entity";


@ObjectType()
export class UserSettings {
  @Field()
  id: string; // Unique identifier for the settings

  @Field()
  theme: string; // User's theme preference

  @Field()
  notifications: boolean; // Whether notifications are enabled

  @Field()
  userId: string; // Foreign key linking to the user

  @Field(() => User)
  user: User; // The user associated with these settings
}
