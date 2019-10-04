import { gql } from 'apollo-boost';

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
