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

  @Field(() => Int)
  likes: number;

  @Field(() => [Comment], { nullable: true })
  comments?: Comment[];

  @Field(() => Int)
  shares: number;

  @Field(() => Int)
  views: number;

  @Field(() => Int)
  saves: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
