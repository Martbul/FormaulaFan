import { ApolloError } from "@apollo/client";
import createApolloClient from "../../apollo-client";
import { START_DIRECT_CONVERATION } from "./conversation.gql";

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
