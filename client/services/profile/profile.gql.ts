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
      favorites {
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
      followedBy {
        id
        username
        email
      }
      following {
        id
        username
        email
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

export const QUERY_USER_3DAVATAR = gql`
  query getUser3dAvatar($userEmail: String!) {
    avatarQuery3d(userEmail: $userEmail) {
      id
      suitColor
      helmetColor
      glovesColor
    }
  }
`;

export const UPDATE_3D_AVATAR = gql`
  mutation update3DProfile(
    $suitColor: String!
    $helmetColor: String!
    $glovesColor: String!
    $userEmail: String!
  ) {
    avatar3d(
      update3dAvatar: {
        suitColor: $suitColor
        helmetColor: $helmetColor
        glovesColor: $glovesColor
        userEmail: $userEmail
      }
    ) {
      id
      suitColor
      helmetColor
      glovesColor
    }
  }
`;
