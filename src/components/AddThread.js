import React from 'react';
import { withRouter } from "react-router"
import { useMutation } from '@apollo/react-hooks';
import { errorHandler } from '../services/graphql/errorHandler'
import { CREATE_THREAD, PUBLISHED_THREADS } from '../services/graphql/queries';

export const AddThread = withRouter((props) => {
  let input;
  const [createThread, { loading, error }] = useMutation(
    CREATE_THREAD,
    {
      onError(error) {
         errorHandler(error, props.history)
      },
      update(cache, { data: { createThread } }) {
        const { publishedThreads } = cache.readQuery({ query: PUBLISHED_THREADS });
        let threads = publishedThreads.slice()
        threads.unshift(createThread)
        cache.writeQuery({
          query: PUBLISHED_THREADS,
          data: { publishedThreads: threads },
        });
      }
  });

  if (loading) return <p>Loading...</p>
  if (error) return <p>I'm so very sorry, a real bad error occured while adding your response</p>

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (input.value) {
            createThread({ variables: { title: input.value, threadId: props.threadId } })
          }
          input.value = ''
          props.history.push("/")
        }}
      >
        <div class="form-group">
          <textarea placeholder="Enter thread" class="form-control" rows="2" ref={node => {
              input = node;
            }}
          />
          <small>Please feel free to thread or ask a question to the community.  Thank you for participating, engaging and connecting. <span role="img" aria-label="praise emoji">🙌</span></small>
        </div>
        <button type="submit" class="btn btn-primary">submit</button>
      </form>
    </div>
  );
});
