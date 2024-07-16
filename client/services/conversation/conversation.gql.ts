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


export const GET_CONVERSATION_USERS_DATA=gql`
query getConversationData($conversationId:String!, $currUserEmail:String!){
  conversationData(id:$conversationId, email:$currUserEmail){
    conversation{
      id
    }
    currentUser{
      id
      username
    }
    conversationUser{
      id
      username
    }
  }
}
`