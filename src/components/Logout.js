import React from 'react'
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router"
import { useQuery } from '@apollo/react-hooks';
import { errorHandler } from '../services/graphql/errorHandler'
import { LOGOUT } from '../services/graphql/queries'

const Logout = withRouter((props) => {
  const { loading } = useQuery(LOGOUT,
  {
    onError(logoutError) {
       errorHandler(logoutError, props.history)
    }
  })

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <Redirect to='/logout/sso'/>
  )
})

export default Logout