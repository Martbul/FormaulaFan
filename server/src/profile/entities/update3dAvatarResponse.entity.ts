import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Update3dAvatarResponse {
  @Field()
  id: string;

  @Field()
  suitColor: string;

  @Field()
  helmetColor: string;
  
    @Field()
  glovesColor: string;
}
