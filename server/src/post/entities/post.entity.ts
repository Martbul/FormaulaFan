import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from 'src/auth/entities/user.entity';
import { Comment } from './comment.entity';


@ObjectType()
export class Post {
  @Field()
  id: string;

  @Field()
  textContent: string;

  @Field({ nullable: true })
  imageContentUrl?: string;

  @Field({ nullable: true })
  videoContent?: string;

  @Field(() => User)
  author: User;

  // @Field(() => [User], { nullable: true })
  // likedBy?: User[];

  // @Field(() => [Comment], { nullable: true })
  // comments?: Comment[];

  // @Field(() => [User], { nullable: true })
  // sharedBy?: User[];

  // @Field(() => [User], { nullable: true })
  // savedBy?: User[];

  @Field(() => [User], { nullable: true })
  likedBy?: User[];

  @Field(() => [Comment], { nullable: true })
  comments?: Comment[];

  @Field(() => [User], { nullable: true })
  sharedBy?: User[];

  @Field(() => [User], { nullable: true })
  savedBy?: User[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
