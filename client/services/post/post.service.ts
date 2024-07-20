;
import { ApolloError } from "@apollo/client";
import createApolloClient from "../../apollo-client";
import { CREATE_POST_MUTATION } from "./post.gql";

const client = createApolloClient();

export async function createPost(textContent:string, imageContentUrl:string, userEmail:string) {
  try {
    const { data } = await client.mutate({
      mutation: CREATE_POST_MUTATION,
      variables: { textContent, imageContentUrl,userEmail },
    });

    const newPost = data.newPost;

    return newPost
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