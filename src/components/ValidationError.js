import React from 'react'
import hash from 'object-hash'

const ValidationError = (props) => {
  let fieldErrors = null
  if (props.error && props.error.graphQLErrors) {
    fieldErrors = <div className="alert alert-danger" role="alert">
      <ul>
      {props.error.graphQLErrors.filter((e) => {
            return e.extensions && e.extensions.code === "BAD_USER_INPUT" && e.extensions.fieldErrors
        }).map(({ extensions }) => (
          extensions.fieldErrors.map(errorMessage => <li key={hash(extensions)}>{errorMessage}</li>)
      ))}
      </ul>
    </div>
  }

  return fieldErrors
}

export default ValidationError
