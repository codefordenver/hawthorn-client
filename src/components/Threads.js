import React from 'react';
import { withRouter } from "react-router"
import { useQuery } from '@apollo/react-hooks';
import { ThreadPreview } from './ThreadPreview';

export const Threads = withRouter((props) => {
  if (props.threads && props.threads.length > 0) {
    return (
      <div className="bg-white rounded shadow-sm m-3">
        <h2 className="pl-3">Active conversations:</h2>
        <ul>
          {props.threads.map(function(thread) {
            return <ThreadPreview
                      threadId={thread.id}
                      title={thread.title}
                      posts={thread.posts} />
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <p className="m-3">This is a new community.  Start the first conversation if you have something on your mind.</p>
    )
  }
})
