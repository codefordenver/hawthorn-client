import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { PUBLISHED_PROMPTS } from '../services/graphql/queries'
import { AddResponse } from './AddResponse';
import { Post } from './Post';
import { Prompt } from './Prompt';

export const Conversations = () => {
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
};
