import { ApolloError } from "@apollo/client";
import createApolloClient from "../../apollo-client";
import {
  CREATE_POST_MUTATION,
  QUERY_POSTS_PAGGINATION,
  LIKE_DISLIKE_POST,
  Add_CCOMMENT_TO_POST,
  GET_SINGLE_POST,
  SAVE_UNSAVE_POST,
  GET_USER_SAVED_POSTS
} from "./post.gql";

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


export async function clickOnLike(postId: string, userId: string, isLiked: boolean) {
  try {
    const result = await client.mutate({
      mutation: LIKE_DISLIKE_POST,
      variables: {
        postId,
        userId,
        isLiked,
      },
    });
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

export async function clickOnSave(postId: string, userId: string, isSaved: boolean) {
  try {
    const result = await client.mutate({
      mutation: SAVE_UNSAVE_POST,
      variables: {
        postId,
        userId,
        isSaved,
      },
    });
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

export async function createComment(
  textContent: string,
  userEmail: string,
  postId:string,
  imageContentUrl?: string
) {
   try {
    const result = await client.mutate({
      mutation: Add_CCOMMENT_TO_POST,
      variables: {
        textContent,
        userEmail,
        postId,
        imageContentUrl
      },
    });

    console.log(result)
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

export async function getUserSavePosts(userEmail:sting){
  try {
    const {data} = await client.query({
      query: GET_USER_SAVED_POSTS,
      variables: {
        userEmail,
      },
    });

       const result = data.userSavedPosts
    console.log(result)
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

export async function getSinglePost(postId:string){
     try {
    const {data} = await client.query({
      query: GET_SINGLE_POST,
      variables: {
        postId,
      },
    });

       const result = data.singlePost
    console.log(result)
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