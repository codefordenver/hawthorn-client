import React from 'react';
import { withRouter } from "react-router"
import { useMutation } from '@apollo/react-hooks';
import { errorHandler } from '../services/graphql/errorHandler'
import { CREATE_THREAD } from '../services/graphql/queries';

export const AddThread = withRouter((props) => {
  let input;
  const [createThread, { data, loading, error }] = useMutation(
    CREATE_THREAD,
    {
      onError(error) {
         errorHandler(error, props.history)
      },
  });

  if (loading) return <p>Loading...</p>
  if (error) return <p>I'm so very sorry, a real bad error occured while adding your response</p>

  return (
    <div className="m-3">
      <form
        onSubmit={e => {
          e.preventDefault()
          if (input.value) {
            createThread({ variables: { title: input.value, groupId: props.groupId } }).then(function(response) {
               props.setModerated(response.data.createThread.moderation !== null)
               props.updateParent()
            })
          }
          input.value = ''
        }}
      >
        <div className="form-group">
          <h3>Start a conversation</h3>
          <textarea placeholder="How can your community support you?" className="form-control" rows="2" ref={node => {
              input = node;
            }}
          />
          <small>The first step is showing up.  Thank you for participating, engaging and connecting with the community. <span role="img" aria-label="praise emoji">🙌</span></small>
        </div>
        <button type="submit" className="btn btn-primary">submit</button>
      </form>
    </div>
  )
})