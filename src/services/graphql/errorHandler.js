export const errorHandler = (error, history) => {
  let result
  if (error.graphQLErrors) {
    error.graphQLErrors.forEach(graphQLError => {
      console.log('graphQLError', graphQLError)
      if (graphQLError.message === "Invalid Authorization Code") {
        history.push("/logout")
      }
      const { extensions } = graphQLError
      if (extensions) {
        switch (extensions.code) {
          case "BAD_USER_INPUT":
            result = extensions.fieldErrors
            break
          case "UNAUTHENTICATED":
          case "FORBIDDEN":
          default:
            // TODO - improve error handling.  Tell end-user an error occurred.
            history.push("/")
        }
      }
    })
  }
  return result
  // else if networkError
  // TODO - What to do here? in
}
