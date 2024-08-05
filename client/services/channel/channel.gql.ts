import { gql } from "@apollo/client";

export const CREATE_CHANNEL_MUTATION = gql`
  mutation createChannel(
    $channelType: String!
    $channelName: String!
    $isPrivate: Boolean!
    $groupId: String!
  ) {
    newChannel(
      createChannelInput: {
        channelType: $channelType
        channelName: $channelName
        isPrivate: $isPrivate
        groupId: $groupId
      }
    ) {
      name
      type
      isPrivate
    }
  }
`;

export const QUERY_ALL_CHANNEL_MESSAGES = gql`
  query getAllChannelMessages($channelId: String!) {
    singleChannel(id: $channelId) {
      id
      messages {
        id
        content
        member {
          user {
            id
            username
            email
          }
        }
      }
      isPrivate
    }
  }
`;
