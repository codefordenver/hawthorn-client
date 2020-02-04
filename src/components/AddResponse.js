import React, { useState } from 'react';
import { withRouter } from "react-router"
import { useMutation } from '@apollo/react-hooks';
import { errorHandler } from '../services/graphql/errorHandler'
import { CREATE_POST , THREAD } from '../services/graphql/queries';


export const AddResponse = withRouter((props) => {
  const [showResponseForm, setShowResponseForm] = useState(false)

  let input;
  const [createPost, { loading, error }] = useMutation(
    CREATE_POST,
    {
      onError(error) {
         errorHandler(error, props.history)
      }
    }
  );

  if (loading) return <p>Loading...</p>
  if (error) return <p>I'm so very sorry, a real bad error occured while adding your response {error}</p>

  let responseForm
  if (showResponseForm) {
    responseForm = <form
                    onSubmit={e => {
                      e.preventDefault()
                      if (input.value) {
                        createPost({ variables: { content: input.value, threadId: props.threadId } }).then(function(response) {
                          props.setModerated(response.data.createPost.moderation !== null)
                          props.updateParent()
                          setShowResponseForm(!showResponseForm)
                        })
                      }
                    }}>
                    <h3>Share your response</h3>
                    <div className="form-group">
                      <textarea className="form-control" rows="3" ref={node => {
                          input = node
                        }}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">submit</button>
                  </form>
  } else {
    responseForm = <button
                      type="button"
                      className="btn btn-link"
                      onClick={() => setShowResponseForm(!showResponseForm)}>share your response</button>
  }

  const body = <div className="mx-0 mb-3">
    {responseForm}
  </div>

  return (
    body
  );
});
