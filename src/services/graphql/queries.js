import { gql } from 'apollo-boost';

// Queries
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

export const GROUPS = gql`
  query {
    groups {
      id
      name
      description
      threads{
        title
      }
    }
  }
`;

export const THREAD = gql`
  query Thread($id: ID!) {
    thread(id:$id) {
      id
       title
       posts {
         content
         createdAt
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
mutation CreateThread($title: String!, $groupId: ID!) {
  createThread(title: $title, groupId: $groupId) {
    id
    title
  }
}
`;
