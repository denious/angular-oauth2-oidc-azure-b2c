// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  auth: {
    issuer: 'https://phenomenexb2c.b2clogin.com/964b7d74-24a3-4446-9a32-5c58d965b7b2/v2.0/',
    loginUrl: 'https://PhenomenexB2C.b2clogin.com/PhenomenexB2C.onmicrosoft.com/oauth2/v2.0/authorize',
    redirectUri: 'http://localhost:4200',
    onLoginUrl: '/login',
    onErrorRedirectUrl: '/',
    silentRefreshRedirectUri: 'http://localhost:4200/assets/silent-refresh.html',
    clientId: '1ea86d94-ccc0-414f-88e2-7508276ea288',
    scope: 'https://PhenomenexB2C.onmicrosoft.com/1ea86d94-ccc0-414f-88e2-7508276ea288/user_impersonation',
    logoutUrl: 'https://PhenomenexB2C.b2clogin.com/PhenomenexB2C.onmicrosoft.com/oauth2/v2.0/logout?p=B2C_1_PhxSignUpSignIn',
    nonceStateSeparator: ',',
    signUpSignInPolicy: 'B2C_1_PhxSignUpSignIn',
    passwordResetPolicy: 'B2C_1_PwdReset'
  }
};

import 'zone.js/dist/zone-error';  // Included with Angular CLI.
