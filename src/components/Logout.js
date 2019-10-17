import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Redirect } from "react-router-dom";
import { LOGOUT } from '../services/graphql/queries';

export const Logout = (props) => {
  const { loading, error } = useQuery(LOGOUT)

  if (loading) {
    return (
      <h2>Loading...</h2>
    )
  }
  if (error) {
    return (
      <div>Error :( {JSON.stringify(error)}</div>
    )
  }

  return (
    <Redirect to='/logout/sso'/>
  );
};
