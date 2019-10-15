import { configuration } from '../configuration/configuration';

export const auth = {
    authorizeUri() {
      return `${configuration.fusionAuth.baseUrl}/oauth2/authorize?client_id=${configuration.fusionAuth.clientId}&redirect_uri=${configuration.fusionAuth.redirectUri}&response_type=code&scope=offline_access`
    }
};
