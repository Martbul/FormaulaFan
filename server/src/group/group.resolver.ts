import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GroupService } from './group.service';
import { Group } from './entities/group.entity';
import { CreateGroupInput } from './dto/createGroup/create-group.input';
import { UpdateGroupInput } from './dto/updateGroup/update-group.input';
import { CreateGroupResponse } from './dto/createGroup/createGroup-response';
import { AddUserToGroupInput } from './dto/updateGroup/add-user-to-group';
import { Member } from './entities/members.entity';
import { User } from 'src/auth/entities/user.entity';


@Resolver(() => Group)
export class GroupResolver {
  constructor(private readonly groupService: GroupService) {}

  @Mutation(() => CreateGroupResponse)
  createGroup(@Args('createGroupInput') createGroupInput: CreateGroupInput) {
    console.log(createGroupInput);

    return this.groupService.createGroup(createGroupInput);
  }

  @Query(() => [Group])
  allGroups() {
    return this.groupService.findAll();
  }

  @Query(() => Group)
  singleGroup(@Args('id') id: string) {
    return this.groupService.findOne(id);
  }

  @Query(() => User)
  groupsUserIsMember(@Args('email') email: string) {
    return this.groupService.findgroupsUserIsMember(email);
  }

  @Mutation(() => Member)
  addedUserToGroup(
    @Args('addUserToGroupInput') addUserToGroupInput: AddUserToGroupInput,
  ) {
    console.log(addUserToGroupInput);

    return this.groupService.addUserToGroup(addUserToGroupInput);
  }

  @Mutation(() => Group)
  updateGroup(@Args('updateGroupInput') updateGroupInput: UpdateGroupInput) {
    return this.groupService.update(updateGroupInput.id, updateGroupInput);
  }

  @Mutation(() => Group)
  removeGroup(@Args('id', { type: () => Int }) id: number) {
    return this.groupService.remove(id);
  }
}
