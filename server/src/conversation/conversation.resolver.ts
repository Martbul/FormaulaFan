import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ConversationService } from './conversation.service';
import { Conversation } from './entities/conversation.entity';
import { StartConversationInput } from './dto/start-conversation.input';
import { UpdateConversationInput } from './dto/update-conversation.input';
import { ConversationData } from './entities/conversatioUsersData.entity';
import { User } from 'src/auth/entities/user.entity';

@Resolver(() => Conversation)
export class ConversationResolver {
  constructor(private readonly conversationService: ConversationService) {}

  @Mutation(() => Conversation)
  startDirectConversation(
    @Args('startConversationInput')
    startConversationInput: StartConversationInput,
  ) {
    return this.conversationService.startCoversation(startConversationInput);
  }

  @Query(() => [Conversation], { name: 'conversation' })
  findAll() {
    return this.conversationService.findAll();
  }

  @Query(() => ConversationData)
  conversationData(@Args('id') id: string, @Args('email') email: string) {
    return this.conversationService.findConversationAndCurrentUser(id, email);
  }


  @Query(() => [User])
  allUserConversations(@Args('email') email: string) {
    return this.conversationService.findAllUserConversationsByEmail(email);
  }
}
