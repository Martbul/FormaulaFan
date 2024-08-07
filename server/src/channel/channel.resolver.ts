import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ChannelService } from './channel.service';
import { CreateChannelInput } from './dto/create-message.input';
import { UpdateChannelInput } from './dto/update-channel.input';
import { Channel } from './entities/channel.entity';

@Resolver(() => Channel)
export class ChannelResolver {
  constructor(private readonly channelService: ChannelService) {}

  @Mutation(() => Channel)
  newChannel(
    @Args('createChannelInput') createChannelInput: CreateChannelInput,
  ) {
    return this.channelService.create(createChannelInput);
  }

  @Query(() => [Channel], { name: 'channel' })
  findAll() {
    return this.channelService.findAll();
  }

  

  @Query(() => Channel)
  singleChannel(@Args('id') id: string) {    
    return this.channelService.findOne(id);
  }

  @Mutation(() => Channel)
  updateChannel(
    @Args('updateChannelInput') updateChannelInput: UpdateChannelInput,
  ) {
    return this.channelService.update(
      updateChannelInput.id,
      updateChannelInput,
    );
  }

  @Mutation(() => Channel)
  removeChannel(@Args('id', { type: () => Int }) id: number) {
    return this.channelService.remove(id);
  }
}
