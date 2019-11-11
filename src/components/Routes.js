import React from 'react';
import { Switch, Route } from "react-router-dom";
import { AddPrompt } from './AddPrompt';
import { Conversations } from './Conversations';
import { LoginWithRouter as Login } from './Login';
import { Logout } from './Logout';
import { Header } from './Header';
import { useQuery } from '@apollo/react-hooks';
import { FUSIONAUTH_CONFIG } from '../services/graphql/queries'
import { errorHandler } from '../services/graphql/errorHandler'

export const Routes = (props) => {
  // Setup configuration here since this is the highest-level component with access to ApolloClient
  const { loading, error, data } = useQuery(FUSIONAUTH_CONFIG,
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

  const configuration = {
    fusionAuth: data.fusionAuthConfig
  }
  const authorizeUri = `${configuration.fusionAuth.endpoint}/oauth2/authorize?client_id=${configuration.fusionAuth.clientId}&redirect_uri=${configuration.fusionAuth.redirectUri}&response_type=code&scope=offline_access`
  const logoutUri = `${configuration.fusionAuth.endpoint}/oauth2/logout?client_id=${configuration.fusionAuth.clientId}&tenantId=${configuration.fusionAuth.tenantId}`

  return (
    <main role="main" class="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Conversations} />
        <Route exact path="/prompt" component={AddPrompt} />
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
    </main>
  );
};
