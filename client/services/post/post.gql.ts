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
        email
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

export const SAVE_UNSAVE_POST = gql`
  mutation saveUnsavePost(
    $postId: String!
    $userId: String!
    $isSaved: Boolean!
  ) {
    saveUnsave(
      saveUnsavePostInput: {
        postId: $postId
        userId: $userId
        isSaved: $isSaved
      }
    )
  }
`;
//! frontend about save and unsave is ready(maybe ;D)

export const Add_CCOMMENT_TO_POST = gql`
  mutation addCommentToPost(
    $textContent: String!
    $userEmail: String!
    $postId: String!
    $imageContentUrl: String
  ) {
    addedComment(
      addCommnetToPostInput: {
        textContent: $textContent
        userEmail: $userEmail
        postId: $postId
        imageContentUrl: $imageContentUrl
      }
    ) {
      id
    }
  }
`;

export const GET_SINGLE_POST = gql`
  query getSingePost($postId: String!) {
    singlePost(id: $postId) {
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

export const GET_USER_SAVED_POSTS = gql`
  query getUserSavedPosts($userEmail: String!) {
    userSavedPosts(userEmail: $userEmail) {
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

export const DELETE_POST = gql`
  mutation DeletePost($userEmail: String!, $postId: String!) {
    deletedPost(userEmail: $userEmail, postId: $postId){
      success
      message
    }
  }
`;