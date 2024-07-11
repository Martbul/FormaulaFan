import { gql, ApolloError } from "@apollo/client";
import createApolloClient from "../../apollo-client";
import { Dispatch, SetStateAction } from "react";
import { User } from "./auth.interface";

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
const SIGN_UP_MUTATION = gql`
  mutation signUp($username: String!, $email: String!, $password: String!) {
    signUp(
      signUpInput: { username: $username, email: $email, password: $password }
    ) {
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
  setUser:Dispatch<SetStateAction<User>>
) {
  try {
    const { data } = await client.mutate({
      mutation: SIGN_IN_MUTATION,
      variables: { email, password },
    });

    const { user, accessToken, refreshToken } = data.signIn;

    setUser(user);
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem('user', JSON.stringify(user))

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
export async function signUp(
  username: string,
  email: string,
  password: string,
  setUser: Dispatch<SetStateAction<User>>
) {
  try {
    const { data } = await client.mutate({
      mutation: SIGN_UP_MUTATION,
      variables: { username, email, password },
    });

    const { user, accessToken, refreshToken } = data.signUp;

    setUser(user);
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("user", JSON.stringify(user));

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

export function logout(setUser:Dispatch<SetStateAction<User>>) {
  localStorage.clear();
  setUser({ username: "Guest", email: undefined });
}
