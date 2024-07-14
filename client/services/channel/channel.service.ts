import { ApolloError } from "@apollo/client";
import createApolloClient from "../../apollo-client";
import { CREATE_CHANNEL_MUTATION } from "./channel.gql";

const client = createApolloClient();

export async function createChannel(
  channelType: "TEXT" | "VOICE",
  channelName: string,
  isPrivate: boolean,
  groupId: string
) {
  try {    
    const { data } = await client.mutate({
      mutation: CREATE_CHANNEL_MUTATION,
      variables: { channelType, channelName, isPrivate, groupId },
    });

    const channel = data.newChannel;
    return channel;
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
