import { ApolloError } from "@apollo/client";
import createApolloClient from "../../apollo-client";
import {
  QUERY_USER_PROFILE,
  UPDATE_3D_AVATAR,
  QUERY_USER_3DAVATAR,
} from "./profile.gql";

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
    if (error instanceof ApolloError) {
      console.error("GraphQL error details:", error.graphQLErrors);
      console.error("Network error details:", error.networkError);
    } else {
      console.error("Unknown error:", error);
    }
    throw error;
  }
}

export async function get3dAvatarData(userEmail: string) {
  console.log("QUERY_USER_3DAVATAR");
  try {
    const { data } = await client.query({
      query: QUERY_USER_3DAVATAR,
      variables: { userEmail },
    });

    const result = data.avatarQuery3d;
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

export async function update3DAvatar(
  suitColor: string,
  helmetColor: string,
  glovesColor: string,
  userEmail: string,
) {
  console.log(suitColor, helmetColor, glovesColor, userEmail);
  try {
    const { data } = await client.mutate({
      mutation: UPDATE_3D_AVATAR,
      variables: { suitColor, helmetColor, glovesColor, userEmail },
    });

    const result = data.avatar3d;
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
