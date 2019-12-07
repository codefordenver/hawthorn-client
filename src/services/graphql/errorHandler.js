export const errorHandler = (error, history) => {
  if (error.graphQLErrors) {
    error.graphQLErrors.forEach(graphQLError => {
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
