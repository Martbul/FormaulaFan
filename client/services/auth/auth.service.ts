// signInService.ts
import { gql, ApolloError } from "@apollo/client";
import createApolloClient from "../../apollo-client";

const client = createApolloClient();

const SIGN_IN_MUTATION = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(signInInput: { email: $email, password: $password }) {
      accessToken
      refreshToken
      user {
        username
        email
      }
    }
  }
`;

export async function signIn(
  email: string,
  password: string,
  setUser
) {
  try {
    const { data } = await client.mutate({
      mutation: SIGN_IN_MUTATION,
      variables: { email, password },
    });

    const { user, accessToken, refreshToken } = data.signIn;
    console.log(user);
    setUser(user);
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    return { user, accessToken, refreshToken };
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
