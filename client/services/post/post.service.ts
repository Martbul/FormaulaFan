import { ApolloError } from "@apollo/client";
import createApolloClient from "../../apollo-client";
import { CREATE_POST_MUTATION,QUERY_ALL_POSTS } from "./post.gql";

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

export async function getAllPosts(){
  try{
  const {data} = await client.query({
    query: QUERY_ALL_POSTS
  })

  const posts = data.allPosts;
  
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