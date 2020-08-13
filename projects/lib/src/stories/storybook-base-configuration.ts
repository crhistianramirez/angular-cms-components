import 'tinymce/tinymce';
import '../../../../plugin/dist/plugin.min.js';
import { HeadStartSDK } from '@ordercloud/headstart-sdk';
import * as HeadStartSDKInstance from '@ordercloud/headstart-sdk';

HeadStartSDKInstance.Configuration.Set({
  baseApiUrl: 'https://marketplace-middleware-test.azurewebsites.net',
});
HeadStartSDK.Tokens.SetAccessToken(
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3IiOiJjcmhpc3RpYW5zdXBwbGllcjQxMTA2IiwiY2lkIjoiN2UwZmQ2MmItOWRkOS00OTM5LTllMGItMjZkODgyZmMzNTA4IiwiaW1wIjoiMTE3NyIsInUiOiIxODEyNjMwIiwidXNydHlwZSI6InN1cHBsaWVyIiwicm9sZSI6WyJBZG1pblVzZXJSZWFkZXIiLCJCdXllckFkbWluIiwiQnV5ZXJSZWFkZXIiLCJCdXllclVzZXJSZWFkZXIiLCJDYXRhbG9nUmVhZGVyIiwiRnVsbEFjY2VzcyJdLCJpc3MiOiJodHRwczovL2F1dGgub3JkZXJjbG91ZC5pbyIsImF1ZCI6Imh0dHBzOi8vYXBpLm9yZGVyY2xvdWQuaW8iLCJleHAiOjE1OTczNjkxMDEsIm5iZiI6MTU5NzM0MDMwMX0.J0mR2a50J2HP1Q4BHdItAq4_7Klbu7Te8sSfktmtfAc'
);
