import { gql } from 'apollo-boost';

// Queries
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
  login(code: $code) {
    id
    email
    username
    firstName
    lastName
  }
}
`;

export const LOGOUT = gql`
query {
  logout
}
`;

export const PUBLISHED_PROMPTS = gql`
  query {
    publishedPrompts {
      id
      title
      posts {
        id
        title
        author {
          id
          email
          firstName
          lastName
        }
      }
    }
  }
`;

// Mutations
export const ADD_RESPONSE = gql`
mutation CreateDraftPost($title: String!, $userId: String!, $promptId: ID!) {
  createDraftPost(title: $title, userId: $userId, promptId: $promptId) {
    id
    published
    title
    authorId
    author {
      id
      firstName
      lastName
    }
    prompt {
      id
      title
    }
  }
}
`;
