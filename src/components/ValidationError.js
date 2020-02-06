import React from 'react'

const ValidationError = (props) => {
  let fieldErrors = null
  if (props.error && props.error.graphQLErrors) {
    fieldErrors = <div class="alert alert-danger" role="alert">
      <ul>
      {props.error.graphQLErrors.filter(function (e) {
            return e.extensions && e.extensions.code === "BAD_USER_INPUT" && e.extensions.fieldErrors
        }).map(({ extensions }, i) => (
          extensions.fieldErrors.map(errorMessage => <li key={i}>{errorMessage}</li>)
      ))}
      </ul>
    </div>
  }

  return fieldErrors
}

export default ValidationError
