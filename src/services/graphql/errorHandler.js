export const errorHandler = (error, history) => {
  if (error.graphQLErrors) {
    error.graphQLErrors.forEach(graphQLError => {
      console.log('errorHandler', graphQLError)
      const { extensions } = graphQLError
      if (extensions) {
        switch (extensions.code) {
          case "UNAUTHENTICATED":
            history.push("/login/init")
            break
          case "FORBIDDEN":
            history.push("/")
            break
          default:
            // TODO - What to do here?
        }
      }
    })
  }
  // else if networkError
  // TODO - What to do here? in
}
