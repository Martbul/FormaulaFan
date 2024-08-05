import { ApolloError } from "@apollo/client";
import createApolloClient from "../../apollo-client";
import { QUERY_USER_PROFILE } from "./profile.gql";

const client = createApolloClient();

export async function getUserProfile(userEmail: string) {
  try {
    const { data } = await client.query({
      query: QUERY_USER_PROFILE,
      variables: { userEmail },
    });

    const result = data.userProfileData;

    return result;
  } catch (error) {
    console.log(error);
    if (error instanceof ApolloError) {
      console.error("GraphQL error details:", error.graphQLErrors);
      console.error("Network error details:", error.networkError);
    } else {
      console.error("Unknown error:", error);
    }
    throw error;
  }
}
