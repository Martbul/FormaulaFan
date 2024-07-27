import { gql } from "@apollo/client";

export const QUERY_USER_PROFILE = gql`
  query getUserId($userEmail: String!) {
    userProfileData(email: $userEmail) {
      id
      username
      email
      picture
      createdAt
      cover
      bio
      status
      posts {
        id
        textContent
        imageContentUrl
        videoContent
        createdAt
        createdAt
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
        author {
          username
          picture
        }
      }
      conversationsInitiated {
        userOne {
          id
          username
        }
        userTwo {
          id
          username
        }
      }
      conversationsReceived {
        userOne {
          id
          username
        }
        userTwo {
          id
          username
        }
      }
      createdGroups {
        id
        name
      }
      members {
        id
        role
        group {
          id
          name
          imageUrl
        }
      }
    }
  }
`;