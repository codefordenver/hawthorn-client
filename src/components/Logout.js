import React from 'react'
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router"
import { useQuery } from '@apollo/react-hooks';
import { errorHandler } from '../services/graphql/errorHandler'
import { FUSIONAUTH_CONFIG } from '../services/graphql/queries'
import { LOGOUT } from '../services/graphql/queries'

export const Logout = withRouter((props) => {
  var { loading, error, data } = useQuery(LOGOUT,
  {
    onError(error) {
       errorHandler(error, props.history)
    }
  })

  if (loading) {
    return <p>Loading</p>
  } else if (error) {
    return <p>An unexpected error occurred, please come back later</p>
  }

  return (
    <Redirect to='/logout/sso'/>
  )
})
