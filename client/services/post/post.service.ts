import { ApolloError } from "@apollo/client";
import createApolloClient from "../../apollo-client";
import { CREATE_POST_MUTATION,QUERY_ALL_POSTS ,QUERY_POSTS_PAGGINATION } from "./post.gql";

const client = createApolloClient();

export async function createPost(textContent:string, userEmail:string, imageContentUrl?:string) {
  try {
   const { data } = await client.mutate({
  mutation: CREATE_POST_MUTATION,
  variables: {
    textContent: textContent.trim(),
    imageContentUrl: imageContentUrl?.trim() || null, 
    userEmail
  }
});

    const newPost = data.newPost;

     if (!newPost) {
       throw new Error("Failed to create post: No data returned.");
     }

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

export async function getPaginatedPosts(lastPostId?:string) {
  console.log(lastPostId);
  
  try{
    const {data} = await client.query({
      query: QUERY_POSTS_PAGGINATION,
      variables: {lastPostId}
    })

    const posts = data.paginatedPosts
    console.log(posts)
    return posts
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