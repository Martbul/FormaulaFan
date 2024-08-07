import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProfileService } from './profile.service';
import { Profile } from './entities/profile.entity';
import { User } from 'src/auth/entities/user.entity';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Query(() => Profile)
  async userProfileData(@Args('email') email: string) {

     const user = await this.profileService.findOne(email);
     console.log(`Found user: ${JSON.stringify(user)}`);
     return user;
  }
}
