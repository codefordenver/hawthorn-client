import React from 'react';
import { withRouter } from "react-router"
import { useMutation } from '@apollo/react-hooks';
import { errorHandler } from '../services/graphql/errorHandler'
import { CREATE_PRIVATE_GROUP } from '../services/graphql/queries';
import ValidationError from './ValidationError'

const AddGroup = withRouter((props) => {
  let nameInput;
  let descriptionInput;
  const [createGroup, { data, loading, error }] = useMutation(
    CREATE_PRIVATE_GROUP,
    {
      errorPolicy: 'all',
      onError(error) {
         errorHandler(error, props.history)
      },
  });

  if (loading) return <p>Loading...</p>

  return (
    <div className="m-3">
      <ValidationError error={error} />

      <form
        onSubmit={e => {
          e.preventDefault()
          if (nameInput.value && descriptionInput.value) {
            createGroup({ variables: { name: nameInput.value, description: descriptionInput.value } })
          } else {
            return
          }
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
          <input type="text" className="form-control" id="inputCommunityDescription"
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

export default AddGroup