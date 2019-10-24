import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Redirect } from "react-router-dom";
import { PUBLISHED_PROMPTS } from '../services/graphql/queries'
import { errorHandler } from '../services/graphql/errorHandler'
import { Conversation } from './Conversation';

export const Conversations = (props) => {
  const { loading, error, data } = useQuery(PUBLISHED_PROMPTS,
  {
    onError(error) {
       errorHandler(error, props.history)
    }
  })

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  return data.publishedPrompts.map(({ id, title, posts }) => (
    <Conversation id={id} title={title} posts={posts} />
  ));
};
