export default (error, history) => {
  if (error.graphQLErrors) {
    error.graphQLErrors.forEach(graphQLError => {
      console.log('graphQLError', graphQLError)
      if (graphQLError.message === "Invalid Authorization Code") {
        history.push("/logout")
      }
      const { extensions } = graphQLError
      if (extensions) {
        switch (extensions.code) {
          case "UNAUTHENTICATED":
          case "FORBIDDEN":
          default:
            // TODO - improve error handling.  Tell end-user an error occurred.
            history.push("/")
        }
      }
    })
  }
  // else if networkError
  // TODO - What to do here? in
}
