import React from 'react';
import { withRouter } from "react-router"
import { useMutation } from '@apollo/react-hooks';
import { errorHandler } from '../services/graphql/errorHandler'
import { CREATE_GROUP } from '../services/graphql/queries';

export const AddGroup = withRouter((props) => {
  let nameInput;
  let descriptionInput;
  const [createGroup, { data, loading, error }] = useMutation(
    CREATE_GROUP,
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
          if (nameInput.value && descriptionInput.value) {
            createGroup({ variables: { name: nameInput.value, description: descriptionInput.value } }).then(function(response) {
               props.setModerated(response.data.createGroup.moderation !== null)
               props.updateParent()
            })
          } else {
            return
          }
          descriptionInput.value = ''
          nameInput.value = ''
        }}
      >
        <div className="form-group">
          <label for="inputCommunityName">New community name</label>
          <input type="text" className="form-control" id="inputCommunityName"
            placeholder="Enter community name"
            ref={node => {
              nameInput = node;
            }}/>
          <small className="form-text text-danger">* required</small>
        </div>
        <div className="form-group">
          <label for="inputCommunityDescription">Description</label>
          <input type="text" className="form-control" id="inputCommunityName"
            placeholder="Enter community description"
            ref={node => {
                descriptionInput = node;
            }} />
          <small className="form-text text-danger">* required</small>
        </div>
        <button type="submit" className="btn btn-primary">submit</button>
      </form>
    </div>
  )
})