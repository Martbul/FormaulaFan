import { gql } from "@apollo/client";

export const CREATE_POST_MUTATION = gql`
  mutation createNewPost(
    $textContent: String!
    $imageContentUrl: String
    $userEmail: String!
  ) {
    newPost(
      createPostInput: {
        textContent: $textContent
        imageContentUrl: $imageContentUrl
        userEmail: $userEmail
      }
    ) {
      id
      author {
        id
        username
        picture
      }
      textContent
      imageContentUrl
    }
  }
`;

export const QUERY_POSTS_PAGGINATION = gql`
  query getPaginatedPosts($lastPostId: String) {
    paginatedPosts(paginationInput: { cursor: $lastPostId, limit: 20 }) {
      id
      textContent
      imageContentUrl
      videoContent
      createdAt
      author {
        username
        picture
      }
      likedBy {
        id
      }
      comments {
        id
        textContent
        imageContentUrl
        videoContent
        createdAt
        author {
          username
          picture
        }
        post {
          id
        }
        likes
        shares
        views
        saves
      }
      sharedBy {
        id
      }
      savedBy {
        id
      }
    }
  }
`;
export const LIKE_DISLIKE_POST = gql`
  mutation likeDislikePost(
    $postId: String!
    $userId: String!
    $isLiked: Boolean!
  ) {
    likeDislike(
      likeDislikePostInput: {
        postId: $postId
        userId: $userId
        isLiked: $isLiked
      }
    )
  }
`;

export const Add_CCOMMENT_TO_POST = gql`
mutation addCommentToPost( $textContent:String!,
        $userEmail:String!,
        $postId:String!,
        $imageContentUrl:String){
          addedComment(addCommnetToPostInput:{textContent:$textContent, userEmail:$userEmail,postId:$postId,imageContentUrl:$imageContentUrl}){
            id
          }
        }
`;


export const GET_SINGLE_POST = gql`
 query getSingePost($postId: String!) {
    singlePost(id: $postId){
        id
      textContent
      imageContentUrl
      videoContent
      createdAt
      author {
        username
        picture
      }
      likedBy {
        id
      }
      comments {
        id
        textContent
        imageContentUrl
        videoContent
        createdAt
        author {
          username
          picture
        }
        post {
          id
        }
        likes
        shares
        views
        saves
      }
      sharedBy {
        id
      }
      savedBy {
        id
      }
    }
    }
`