import { gql } from "@apollo/client";

export const START_DIRECT_CONVERATION = gql`
  mutation startDirectConversation(
    $userOneEmail: String!
    $userTwoId: String!
  ) {
    startDirectConversation(
      startConversationInput: {
        userOneEmail: $userOneEmail
        userTwoId: $userTwoId
      }
    ) {
      id
      userOne{
        id
        username
      }
      userTwo{
        id
        username
      }
    }
  }
`;
