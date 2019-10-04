import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';
import { ApolloProvider, useQuery, useMutation } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'http://localhost:4000'
});

const PUBLISHED_PROMPTS = gql`
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

const ADD_RESPONSE = gql`
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

function Conversations() {
  const { loading, error, data } = useQuery(PUBLISHED_PROMPTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.publishedPrompts.map(({ id, title, posts }) => (
    <div key={id}>
      <Prompt body={title} />
      <ul>
        {posts.map((post) =>
          <Post key={id} body={post.title} author={post.author}/>
        )}
      </ul>
      <AddResponse promptId={id}/>
    </div>
  ));
}

function AddResponse(props) {
  let input;
  const [addResponse, { loading, error }] = useMutation(
    ADD_RESPONSE,
    {
      update(cache, { data: { createDraftPost } }) {
        const { publishedPrompts } = cache.readQuery({ query: PUBLISHED_PROMPTS });
        let prompts = publishedPrompts.slice()
        for (let i = 0; i < prompts.length; i++) {
          if (prompts[i].id === createDraftPost.prompt.id) {
            prompts[i].posts = prompts[i].posts.concat(createDraftPost)
            cache.writeQuery({
              query: PUBLISHED_PROMPTS,
              data: { publishedPrompts: prompts },
            });
            break;
          }
        }
      }
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Real bad error, but what is it?</p>;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addResponse({ variables: { title: input.value, userId: "5933d51f-f989-4c09-aac1-0406aa621510", promptId: props.promptId } });
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Response</button>
      </form>
    </div>
  );
}

function Prompt(props) {
  return (
    <h1>{props.body}</h1>
  )
}

function Post(props) {
  return (
    <li key={props.key}>
      <img src="https://i.pravatar.cc/25" alt="Avatar" id="avatar"/>
      <sub>{props.author.firstName} {props.author.lastName}</sub>
      <span id="post-body">{props.body}</span>
    </li>
  )
}

function App(props) {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
        <Conversations />
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
