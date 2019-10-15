import { gql } from 'apollo-boost';

// Queries
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

export const LOGIN = gql`
query Login($code: String!) {
  login(code: $code) {
    accessToken
    userId
  }
}
`;
