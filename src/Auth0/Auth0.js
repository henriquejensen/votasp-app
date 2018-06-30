import auth0 from 'auth0-js';

import env from '../env';
import history from '../history';
import store from '../redux/store';
import { storeUserData } from '../redux/modules/auth0';

export default class Auth {
  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);

    this.auth0 = new auth0.WebAuth({
      domain: env.auth0.domain,
      clientID: env.auth0.clientId,
      redirectUri: env.auth0.callbackUrl,
      audience: `https://${env.auth0.originalDomain}/userinfo`,
      responseType: 'token id_token',
      scope: 'openid profile user_metadata'
    });
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace('/');
      } else if (err) {
        console.log(err);
        window.alert(
          `Ocorreu um erro no login, cheque o console para mais detalhes.`
        );
      }
    });
  }

  setSession(authResult) {
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );

    window.localStorage.setItem('access_token', authResult.accessToken);
    window.localStorage.setItem('id_token', authResult.idToken);
    window.localStorage.setItem('expires_at', expiresAt);

    this.getUserInfo();

    history.replace('/');
  }

  logout() {
    window.localStorage.removeItem('access_token');
    window.localStorage.removeItem('id_token');
    window.localStorage.removeItem('expires_at');
    history.replace('/');
  }

  isAuthenticated() {
    let expiresAt = JSON.parse(window.localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  getUserInfo() {
    const accessToken = window.localStorage.getItem('access_token');

    if (!accessToken) {
      return;
    }

    console.log(this.auth0);
    this.auth0.checkSession(
      {
        audience: `https://minhacampinas.auth0.com/api/v2/`,
        scope: 'read:current_user'
      },
      (err, result) => {
        console.log(err);
        console.log(result);
      }
    );

    this.auth0.client.userInfo(accessToken, (error, userData) => {
      if (error) {
        throw error;
      }

      store.dispatch(storeUserData(userData));
    });
  }
}
