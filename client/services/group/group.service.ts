import { gql, ApolloError } from "@apollo/client";
import createApolloClient from "../../apollo-client";

const client = createApolloClient();

const CREATE_GROUP_MUTATION = gql`
  mutation createGroup($username: String!, $email: String!) {
    createGroup(createGroupInput:  {username: $username, email: $email }) {
      id
      name
      imageUrl
      # creator{
      #   username
      # }
       members{
        role
       }
       channels{
        name
       }
    }
  }
`;


export async function createGroup(
 username:string,
 email:string | undefined
) {
   try {
     console.log('usernameAndEmail',username, email);
     
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
