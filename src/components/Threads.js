import React, { useState } from 'react';
import { withRouter } from "react-router"
import { useQuery } from '@apollo/react-hooks';
import { ThreadPreview } from './ThreadPreview';

export const Threads = withRouter((props) => {
  const [threadIndex, setThreadIndex] = useState(0);

  if (props.threads && props.threads.length > 0) {
    return (
      <div class="bg-white rounded shadow-sm">
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
      <div>
        <h1>welcome.</h1>
        <p>there is nothing to see here yet. please come back later</p>
      </div>
    )
  }
})
