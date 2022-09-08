import { google } from 'googleapis';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, SCOPES } from './constants';

google.calendar;

export function getOAuthClient() {
  return new google.auth.OAuth2(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, `http://localhost:3000`);
}

export function getGoogleAuthURL() {
  return getOAuthClient().generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: SCOPES,
  });
}

export async function getGoogleCredentials(code: string) {
  const {
    tokens: { refresh_token },
  } = await getOAuthClient().getToken(code);

  return refresh_token;
}

export function getGoogleAuth(refreshToken: string) {
  const client = getOAuthClient();
  client.setCredentials({ refresh_token: refreshToken });

  return client;
}
