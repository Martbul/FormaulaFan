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
        picture
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
        picture
      }
    }
  }
`;

const QUERY_USER_ID = gql`
  query getUserId($userEmail: String!) {
    user(email: $userEmail) {
      id
    }
  }
`;

export async function signIn(
  email: string,
  password: string,
  setUser: Dispatch<SetStateAction<User>>,
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
    localStorage.setItem("user", JSON.stringify(user));

    return { user, accessToken, refreshToken, success: true };
  } catch (error) {
    if (error instanceof ApolloError) {
      console.error("GraphQL error details:", error.graphQLErrors);
      console.error("Network error details:", error.networkError);
      const message =
        error.graphQLErrors[0]?.message || "Unknown GraphQL error";
      return { success: false, message };
    } else {
      console.error("Unknown error:", error);
      return { success: false, message: "An unknown error occurred." };
    }
  }
}
export async function signUp(
  username: string,
  email: string,
  password: string,
  setUser: Dispatch<SetStateAction<User>>,
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

    return { user, accessToken, refreshToken, success: true };
  } catch (error) {
    if (error instanceof ApolloError) {
      console.error("GraphQL error details:", error.graphQLErrors);
      console.error("Network error details:", error.networkError);
      const message =
        error.graphQLErrors[0]?.message || "Unknown GraphQL error";
      return { success: false, message };
    } else {
      console.error("Unknown error:", error);
      return { success: false, message: "An unknown error occurred." };
    }
  }
}

export function logout(setUser: Dispatch<SetStateAction<User>>) {
  localStorage.clear();
  setUser({ username: "Guest", email: undefined, picture: "" });
}

export async function getUserId(userEmail: string) {
  try {
    const { data } = await client.query({
      query: QUERY_USER_ID,
      variables: { userEmail },
    });

    const result = data.user;

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
