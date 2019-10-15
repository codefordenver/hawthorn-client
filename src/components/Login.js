import React from 'react';
import { withRouter } from "react-router"
import { useQuery, useMutation } from '@apollo/react-hooks';
import qs from 'qs';
import { LOGIN } from '../services/graphql/queries';

export const Login = (props) => {
  const queryParams = qs.parse(props.location.search, { ignoreQueryPrefix: true })
  const { loading, error, data } = useQuery(LOGIN, {
    variables: { code: queryParams.code }
  })

  if (loading) {
    return (
      <h2>Loading...</h2>
    )
  }
  if (error) {
    return (
      <h2>Error :( {JSON.stringify(error)}</h2>
    )
  }
  if (data.login.accessToken !== null) {
    localStorage.setItem('token', data.login.accessToken)
  }

  return (
    <div>
    </div>
  );
};

export const LoginWithRouter = withRouter(Login)
