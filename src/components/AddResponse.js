import React, { useState } from 'react';
import { withRouter } from "react-router"
import { useMutation } from '@apollo/react-hooks';
import { errorHandler } from '../services/graphql/errorHandler'
import { CREATE_POST, PUBLISHED_THREADS } from '../services/graphql/queries';

export const AddResponse = withRouter((props) => {
  const [showResponseForm, setShowResponseForm] = useState(false)

  let input;
  const [createPost, { loading, error }] = useMutation(
    CREATE_POST,
    {
      onError(error) {
         errorHandler(error, props.history)
      },
      update(cache, { data: { createPost } }) {
        const { publishedThreads } = cache.readQuery({ query: PUBLISHED_THREADS });
        let threads = publishedThreads.slice()
        for (let i = 0; i < threads.length; i++) {
          if (threads[i].id === createPost.thread.id) {
            threads[i].posts = [createPost].concat(threads[i].posts)
            cache.writeQuery({
              query: PUBLISHED_THREADS,
              data: { publishedThreads: threads },
            });
            break;
          }
        }
      }
    }
  );

  if (loading) return <p>Loading...</p>
  if (error) return <p>I'm so very sorry, a real bad error occured while adding your response</p>

  let responseForm
  if (showResponseForm) {
    responseForm = <form
                    onSubmit={e => {
                      e.preventDefault()
                      if (input.value) {
                        createPost({ variables: { title: input.value, threadId: props.threadId } })
                      }
                      input.value = ''
                      setShowResponseForm(!showResponseForm)
                    }}>
                    <div class="form-group">
                      <textarea class="form-control" rows="3" ref={node => {
                          input = node
                        }}
                      />
                    </div>
                    <button type="submit" class="btn btn-primary">submit</button>
                  </form>
  } else {
    responseForm = <button
                      type="button"
                      class="btn btn-link"
                      onClick={() => setShowResponseForm(!showResponseForm)}>share your response</button>
  }

  return (
    <div class="mx-0 mb-3">
      {responseForm}
    </div>
  );
});
