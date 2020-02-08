import { gql } from 'apollo-boost';

// Queries
export const ACCOUNT = gql`
query Account($userId: String!) {
  account(userId: $userId) {
    id
    email
    firstName
    groups{
      id
      name
    }
    imageUrl
    lastName
    username
  }
}
`;

export const FUSIONAUTH_CONFIG = gql`
query {
  fusionAuthConfig{
      endpoint
      clientId
      tenantId
      redirectUri
  }
}
`;

export const LOGIN = gql`
query Login($code: String!) {
  login(code: $code)
}
`;

export const LOGOUT = gql`
query {
  logout
}
`;

export const GROUP = gql`
  query Group($id: ID!) {
    group(id:$id) {
      id
      name
      description
      threads {
        id
        title
        posts {
          id
          content
        }
      }
    }
  }
`;

export const THREAD = gql`
  query Thread($id: ID!) {
    thread(id:$id) {
      id
      group {
        id
        name
      }
      posts {
         id
         content
         createdAt
      }
      title
    }
  }
`;

// Mutations
export const CREATE_PRIVATE_GROUP = gql`
mutation CreateGroup($name: String!, $description: String!) {
  createPrivateGroup(name: $name, description: $description) {
    id
    description
    name
  }
}
`;

export const CREATE_POST = gql`
mutation CreatePost($content: String!, $threadId: ID!) {
  createPost(content: $content, threadId: $threadId) {
    id
    content
    createdAt
    moderation {
      status
    }
  }
}
`;

export const CREATE_THREAD = gql`
mutation CreateThread($title: String!, $groupId: ID!) {
  createThread(title: $title, groupId: $groupId) {
    id
    moderation {
      status
    }
    title
  }
}
`;

export const REGISTER = gql`
mutation Register($email: String!, $password: String!, $username: String!) {
  register(email: $email, password: $password, username: $username)
}
`;
