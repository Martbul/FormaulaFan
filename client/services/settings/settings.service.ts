import { ApolloError } from "@apollo/client";
import createApolloClient from "../../apollo-client";
import { QUERY_USER_SETTINGS } from "./settings.gql";

const client = createApolloClient();

export async function getUserSettings(userEmail: string) {
  try {
    const { data } = await client.query({
      query: QUERY_USER_SETTINGS,
      variables: { userEmail },
    });

    const result = data.userSettings;

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

export async function updateUserSettings(userEmail: string, newSettings: {}) {
  try {
    const { data } = await client.query({
      query: QUERY_USER_SETTINGS,
      variables: { userEmail },
    });

    const result = data.userProfileData;

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
