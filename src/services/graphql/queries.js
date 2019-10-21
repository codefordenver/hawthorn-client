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
    imageUrl
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
          imageUrl
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
    }
    prompt {
      id
      title
    }
  }
}
`;
