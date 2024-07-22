import { ApolloError } from "@apollo/client";
import createApolloClient from "../../apollo-client";
import {
  START_DIRECT_CONVERATION,
  GET_CONVERSATION_USERS_DATA,
  QUERY_ALL_USER_CONVERSATIONS
} from "./conversation.gql";

const client = createApolloClient();

export async function startDirectConversation(
  userOneEmail: string,
  userTwoId: string
) {
  try {
    const { data } = await client.mutate({
      mutation: START_DIRECT_CONVERATION,
      variables: { userOneEmail, userTwoId },
    });

    const result = data.startDirectConversation;

    return result;
  } catch (error) {
    if (error instanceof ApolloError) {
      console.error("GraphQL error details:", error.graphQLErrors);
      console.error("Network error details:", error.networkError);
    } else {
      console.error("Unknown error:", error);
    }
    throw error;
  }
}

export async function getConversationUsersByConvIdAndEmail(
  conversationId: string,
  currUserEmail: string
) {
  console.log(currUserEmail);

  try {
    const { data } = await client.query({
      query: GET_CONVERSATION_USERS_DATA,
      variables: { conversationId, currUserEmail },
    });

    const result = data.conversationData;
    console.log(result);

    return result;
  } catch (error) {
    if (error instanceof ApolloError) {
      console.error("GraphQL error details:", error.graphQLErrors);
      console.error("Network error details:", error.networkError);
    } else {
      console.error("Unknown error:", error);
    }
    throw error;
  }
}


export async function getConversationsByUserEmail(userEmail:string){
  try{

       const { data } = await client.query({
         query: QUERY_ALL_USER_CONVERSATIONS,
         variables: {userEmail },
       });

       const result = data.allUserConversations;
       console.log(result);

       return result;

  }catch(error){
    if (error instanceof ApolloError) {
      console.error("GraphQL error details:", error.graphQLErrors);
      console.error("Network error details:", error.networkError);
    } else {
      console.error("Unknown error:", error);
    }
    throw error;
  }
}
