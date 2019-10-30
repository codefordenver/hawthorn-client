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

  if (data.publishedPrompts.length > 0) {
    return (
      <div class="my-3 p-3 bg-white rounded shadow-sm">
        <div class="row">
          <div class="col">
            <button type="button" class={"btn btn-outline-primary rounded-circle" + (promptIndex === 0 ? ' d-none' : '')} onClick={() => {if (promptIndex > 0) setPromptIndex(promptIndex - 1)}}>
              &lt;
            </button>
          </div>
          <div class="col-9">
            <Conversation id={data.publishedPrompts[promptIndex].id} title={data.publishedPrompts[promptIndex].title} posts={data.publishedPrompts[promptIndex].posts} />
          </div>
          <div class="col">
            <button type="button" class={"btn btn-outline-primary rounded-circle" + (promptIndex + 1 === data.publishedPrompts.length ? ' d-none' : '')} onClick={() => {if (promptIndex < data.publishedPrompts.length - 1) setPromptIndex(promptIndex + 1)}}>
              &gt;
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>welcome.</h1>
        <p>there is nothing to see here yet. please come back later</p>
      </div>
    )
  }
};
