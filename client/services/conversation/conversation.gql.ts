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
    }
  }
`;


export const GET_CONVERSATION_USERS_DATA = gql`
  query getConversationData($conversationId: String!, $currUserEmail: String!) {
    conversationData(id: $conversationId, email: $currUserEmail) {
      conversation {
        id
        directMessages {
          content
          user {
            id
            username
          }
          createdAt
          updatedAt
        }
      }
      currentUser {
        id
        username
        email
        picture
      }
      conversationUser {
        id
        username
        email
        picture
      }
    }
  }
`;

export const QUERY_ALL_USER_CONVERSATIONS = gql`
  query getAllUserConversations($userEmail: String!) {
    allUserConversations(email: $userEmail) {
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