import React from 'react'
import hash from 'object-hash'
import Alert from "./atoms/Alert";

const ValidationError = ({error}) => {

  return (
  <Alert type="danger">
      <ul>
        {
          error?.graphQLErrors
          .filter(({ extensions }) => {
                return (extensions?.code === "BAD_USER_INPUT" 
                && extensions?.fieldErrors)
          })
          .map(({ extensions }) => extensions.fieldErrors.map(
                errorMessage => <li key={hash(extensions)}>{errorMessage}</li>
              )
          )
        }
      </ul>
  </Alert>
  );
}

export default ValidationError
