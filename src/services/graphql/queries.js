import { gql } from 'apollo-boost';

// Queries
export const PUBLISHED_THREADS = gql`
  query {
    publishedThreads {
      id
      title
      posts {
        id
        content
      }
    }
  }
`;

// Mutations
export const CREATE_POST = gql`
mutation CreatePost($content: String!, $threadId: ID!) {
  createPost(content: $content, threadId: $threadId) {
    id
    content
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
