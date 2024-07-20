import { gql } from "@apollo/client";

export const CREATE_POST_MUTATION = gql`
  mutation createNewPost($textContent: String!, $imageContentUrl: String!, $userEmail:String!) {
    newPost(createPostInput: { textContent: $textContent, imageContentUrl: $imageContentUrl, userEmail:$userEmail }) {
      id
      creator
      textContent
      imageContentUrl
      }
    
  }
`;
