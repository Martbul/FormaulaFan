import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProfileService } from './profile.service';
import { Profile } from './entities/profile.entity';
import { User } from 'src/auth/entities/user.entity';
import { Update3dAvatar } from './dto/update3davatar.input';
import { Update3dAvatarResponse } from './entities/update3dAvatarResponse.entity';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Query(() => Profile)
  async userProfileData(@Args('email') email: string) {
    const user = await this.profileService.findOne(email);
    console.log(`Found user: ${JSON.stringify(user)}`);
    return user;
  }

  @Query(() => Update3dAvatarResponse)
  async avatarQuery3d(@Args('userEmail') userEmail: string) {
    return this.profileService.get3dAvatar(userEmail);
  }

  @Mutation(() => Update3dAvatarResponse)
  async avatar3d(@Args('update3dAvatar') update3dAvatar: Update3dAvatar) {
    return this.profileService.update3DAvatar(update3dAvatar);
  }
}
