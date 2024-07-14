import { gql } from "@apollo/client";

export const CREATE_CHANNEL_MUTATION = gql`
mutation createChannel($channelType: String!, $channelName:String!, $isPrivate:Boolean!,$groupId:String!){
  newChannel(createChannelInput:{channelType :$channelType,channelName:$channelName,isPrivate:$isPrivate, groupId:$groupId }){
    name
    type
    isPrivate
  }
}
`