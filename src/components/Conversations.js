import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { PUBLISHED_PROMPTS } from '../services/graphql/queries'
import { errorHandler } from '../services/graphql/errorHandler'
import { Conversation } from './Conversation';

export const Conversations = (props) => {
  const [promptIndex, setPromptIndex] = useState(0);

  const { loading, error, data } = useQuery(PUBLISHED_PROMPTS,
  {
    onError(error) {
       errorHandler(error, props.history)
    }
  })

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  return (
    <div>
      <button onClick={() => {if (promptIndex > 0) setPromptIndex(promptIndex - 1)}}>
        Previous
      </button>
      <Conversation id={data.publishedPrompts[promptIndex].id} title={data.publishedPrompts[promptIndex].title} posts={data.publishedPrompts[promptIndex].posts} />
      <button onClick={() => {if (promptIndex < data.publishedPrompts.length - 1) setPromptIndex(promptIndex + 1)}}>
        Next
      </button>
    </div>
  );
};
