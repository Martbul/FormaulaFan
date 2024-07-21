import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from 'src/auth/entities/user.entity';
import { Post } from './post.entity';

@ObjectType()
export class Comment {
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

  @Field(() => Post)
  post: Post;

  @Field(() => Int)
  likes: number;

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
