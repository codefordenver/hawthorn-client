import React from 'react'
import { Redirect } from "react-router-dom"
import qs from 'qs'
import { withRouter } from "react-router"
import { useQuery } from '@apollo/react-hooks';
import { errorHandler } from '../services/graphql/errorHandler'
import { LOGIN } from '../services/graphql/queries'
import NetworkError from './NetworkError'

const Login = withRouter((props) => {
  // If a `code` parameter exists on the URL we are redirecting back from the
  // authorzation server
  const authorizationCode = qs.parse(props.location.search, { ignoreQueryPrefix: true }).code
  if (authorizationCode) {
    // We now need to exchange the code for a token
    const { loading, error, data } = useQuery(LOGIN, {
      onError(loginError) {
         errorHandler(loginError, props.history)
      },
      variables: { code: authorizationCode }
    })

    if (loading) return <h2>Loading...</h2>
    if (error) return <NetworkError action="completing your account registration" />

    if (data.login) {
      return (
        <Redirect to={{
          pathname: "/account",
          state: { userId: data.login }
        }} />
      )
    }
  }

  // If a `code` parameter is not present, initiate the OAuth authorization
  // Code Grant by redirecting the user to the auth server for login
  window.location = props.authorizeUri
  return null
})

export default Login