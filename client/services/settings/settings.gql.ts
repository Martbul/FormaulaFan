import { gql } from "@apollo/client";

export const QUERY_USER_SETTINGS = gql`
  query getUserSettings($userEmail: String!) {
    userSettings(email: $userEmail) {
      id
      
    }
  }
`;