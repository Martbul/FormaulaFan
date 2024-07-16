import { gql } from "@apollo/client";

export const CREATE_GROUP_MUTATION = gql`
  mutation createGroup($username: String!, $email: String!) {
    createGroup(createGroupInput: { username: $username, email: $email }) {
      id
      name
      imageUrl
      # creator{
      #   username
      # }
     members{
      role
      id
  user{
    id
    username
  }
}
      channels {
        name
      }
    }
  }
`;


export const QUERY_GROUP_BY_ID = gql`
  query getGroupById($id: String!) {
    singleGroup(id: $id) {
      name
      channels {
        name
        type
        isPrivate
      }
      members {
        id
        user {
          id
          username
        }
      }
    }
  }
`;

export const QUERY_ALL_GROUPS = gql`
  query getAllGroups {
    allGroups {
      id
      name
      imageUrl
      members{
        id
        user{
          email
        }
      }
    }
  }
`;

//! working here
export const QUERY_GROUPS_BY_USER_EMAIL = gql`
  query getGroupsByUserEmail($email: String!) {
    groupsUserIsMember(email: $email) {
      id
      members {
        id
        group {
          id
          imageUrl
          name
          members {
            id
          }
        }
        # conversationsInitiated{
        #   id
        # }
        # conversationsReceived{
        #  id
        # }
      }
    }
  }
`;

export const ADD_USER_TO_GROUP_MUTATION = gql`
  mutation addUserAsMemberOfGroup($email: String!, $groupId: String!) {
    addedUserToGroup(
      addUserToGroupInput: { email: $email, groupId: $groupId }
    ) {
      id
    }
  }
`;