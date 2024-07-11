import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GroupService } from './group.service';
import { Group } from './entities/group.entity';
import { CreateGroupInput } from './dto/createGroup/create-group.input';
import { UpdateGroupInput } from './dto/updateGroup/update-group.input';
import { CreateGroupResponse } from './dto/createGroup/createGroup-response';


@Resolver(() => Group)
export class GroupResolver {
  constructor(private readonly groupService: GroupService) {}

  @Mutation(() => CreateGroupResponse)
  createGroup(@Args('createGroupInput') createGroupInput: CreateGroupInput) {
    console.log(createGroupInput);

    return this.groupService.createGroup(createGroupInput);
  }

 

  @Query(() => [Group], { name: 'group' })
  findAll() {
    return this.groupService.findAll();
  }

  @Query(() => Group, { name: 'group' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.groupService.findOne(id);
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
