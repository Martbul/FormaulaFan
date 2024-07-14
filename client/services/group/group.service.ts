import { ApolloError } from "@apollo/client";
import createApolloClient from "../../apollo-client";
import { CREATE_GROUP_MUTATION,QUERY_GROUP_BY_ID, QUERY_ALL_GROUPS } from "./group.gql";

const client = createApolloClient();


export async function createGroup(
 username:string,
 email:string | undefined
) {
   try {
    const { data } = await client.mutate({
      mutation: CREATE_GROUP_MUTATION,
      variables: { username, email },
    });
     
    const {id, name, imageUrl, creator, members, channels} = data.createGroup;

    return { id, name, imageUrl, creator, members, channels };
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



export async function getGroupById(id: string) {
  try {
    const { data } = await client.query({
      query: QUERY_GROUP_BY_ID,
      variables: { id },
    });

    const result = data.singleGroup;
    const group = {
      id,
      ...result
    }
 
  
    return group;
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

export async function getAllGroups() {
  try{
    const {data} = await client.query({
      query: QUERY_ALL_GROUPS
    })

    const groups = data.allGroups;

    return groups;
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