import { gql } from 'apollo-boost';

// Queries
export const PUBLISHED_THREADS = gql`
  query {
    publishedThreads {
      id
      title
      posts {
        id
        title
      }
    }
  }
`;

// Mutations
export const CREATE_POST = gql`
mutation CreatePost($title: String!, $threadId: ID!) {
  createPost(title: $title, threadId: $threadId) {
    id
    title
    thread {
      id
    }
  }
}
`;

export const CREATE_THREAD = gql`
mutation CreateThread($title: String!) {
  createThread(title: $title) {
    id
    title
  }
}
`;
