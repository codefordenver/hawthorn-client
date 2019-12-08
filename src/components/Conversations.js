import React, { useState } from 'react';
import { withRouter } from "react-router"
import { useQuery } from '@apollo/react-hooks';
import { PUBLISHED_THREADS } from '../services/graphql/queries'
import { errorHandler } from '../services/graphql/errorHandler'
import { Conversation } from './Conversation';

export const Conversations = withRouter((props) => {
  const [threadIndex, setThreadIndex] = useState(0);

  const { loading, error, data } = useQuery(PUBLISHED_THREADS,
  {
    onError(error) {
       errorHandler(error, props.history)
    }
  })
  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  if (data.publishedThreads.length > 0) {
    return (
      <div class="bg-white rounded shadow-sm">
        <div class="d-flex justify-content-between">
          <div class="ml-3">
            <button type="button" class={"btn btn-outline-primary rounded-circle" + (threadIndex === 0 ? ' d-none' : '')} onClick={() => {if (threadIndex > 0) setThreadIndex(threadIndex - 1)}}>
              &lt;
            </button>
          </div>
          <div class="float-right mr-3">
            <button type="button" class={"btn btn-outline-primary rounded-circle" + (threadIndex + 1 === data.publishedThreads.length ? ' d-none' : '')} onClick={() => {if (threadIndex < data.publishedThreads.length - 1) setThreadIndex(threadIndex + 1)}}>
              &gt;
            </button>
          </div>
        </div>
        <Conversation id={data.publishedThreads[threadIndex].id} title={data.publishedThreads[threadIndex].title} posts={data.publishedThreads[threadIndex].posts} />
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
});
