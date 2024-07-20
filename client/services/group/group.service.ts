import { ApolloError } from "@apollo/client";
import createApolloClient from "../../apollo-client";
import { CREATE_GROUP_MUTATION,QUERY_GROUP_BY_ID, QUERY_ALL_GROUPS,QUERY_GROUPS_BY_USER_EMAIL, ADD_USER_TO_GROUP_MUTATION} from "./group.gql";

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
    console.log('aaaaaaaaaa',groups);
    

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


export async function getGroupByUserEmail(email: string) {
  console.log(email);
  
   try {
    const { data } = await client.query({
      query: QUERY_GROUPS_BY_USER_EMAIL,
   variables:{email}
    });

     const result = data.groupsUserIsMember;
     console.log('result',result);
     
     const userGroups = []
     result.members.map((member) => {
       userGroups.push(member.group)
     })
   
 
  
    return userGroups;
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


export async function addUserAsAMember(email: string, groupId: string) {

  
   try {
    const { data } = await client.mutate({
      mutation: ADD_USER_TO_GROUP_MUTATION,
      variables: {  email ,groupId},
    });
     
    const result = data.addedUserToGroup;

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