import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { PUBLISHED_PROMPTS } from '../services/graphql/queries'
import { Conversation } from './Conversation';

export const Conversations = () => {
  const { loading, error, data } = useQuery(PUBLISHED_PROMPTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.publishedPrompts.map(({ id, title, posts }) => (
    <Conversation id={id} title={title} posts={posts} />
  ));
};
