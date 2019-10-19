import React from 'react';
import { Navigation } from './Navigation';
import { Switch, Route } from "react-router-dom";
import { LoginWithRouter as Login } from './Login';
import { Logout } from './Logout';
import { Conversations } from './Conversations';
import { useQuery } from '@apollo/react-hooks';
import { FUSIONAUTH_CONFIG } from '../services/graphql/queries'

export const Routes = (props) => {
  // Setup configuration here since this is the highest-level component with access to ApolloClient
  const { loading, error, data } = useQuery(FUSIONAUTH_CONFIG);

  if (loading) {
    return <p>Loading</p>
  } else if (error) {
    return <p>Error</p>
  }

  const configuration = {
    fusionAuth: data.fusionAuthConfig
  }
  const authorizeUri = `${configuration.fusionAuth.endpoint}/oauth2/authorize?client_id=${configuration.fusionAuth.clientId}&redirect_uri=${configuration.fusionAuth.redirectUri}&response_type=code&scope=offline_access`
  const logoutUri = `${configuration.fusionAuth.endpoint}/oauth2/logout?client_id=${configuration.fusionAuth.clientId}&tenantId=${configuration.fusionAuth.tenantId}`

  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" render={() => <div>Home</div>} />
        <Route exact path="/conversations" component={Conversations} />
        {/* OAuth2 authorization grant requires redirect to authorization server */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/login/init" component={() => {
            window.location = authorizeUri
            return null
          }
        } />
        <Route exact path="/logout" component={Logout} />
        {/* OAuth2 logout requires redirect to authorization server */}
        <Route exact path='/logout/sso' component={() => {
            window.location = logoutUri
            return null
          }
        }/>
      </Switch>
    </div>
  );
};
