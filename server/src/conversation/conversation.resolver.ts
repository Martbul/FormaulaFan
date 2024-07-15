import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ConversationService } from './conversation.service';
import { Conversation } from './entities/conversation.entity';
import { StartConversationInput } from './dto/start-conversation.input';
import { UpdateConversationInput } from './dto/update-conversation.input';

@Resolver(() => Conversation)
export class ConversationResolver {
  constructor(private readonly conversationService: ConversationService) {}

  @Mutation(() => Conversation)
  startDirectConversation(
    @Args('startConversationInput')
    startConversationInput: StartConversationInput,
  ) {
    console.log(startConversationInput);
    
    return this.conversationService.startCoversation(startConversationInput);
  }

  @Query(() => [Conversation], { name: 'conversation' })
  findAll() {
    return this.conversationService.findAll();
  }

  @Query(() => Conversation, { name: 'conversation' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.conversationService.findOne(id);
  }

  @Mutation(() => Conversation)
  updateConversation(
    @Args('updateConversationInput')
    updateConversationInput: UpdateConversationInput,
  ) {
    return this.conversationService.update(
      updateConversationInput.id,
      updateConversationInput,
    );
  }

  @Mutation(() => Conversation)
  removeConversation(@Args('id', { type: () => Int }) id: number) {
    return this.conversationService.remove(id);
  }
}
