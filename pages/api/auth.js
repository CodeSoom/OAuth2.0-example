import crypto from 'crypto';


import { getSession } from '../../lib/get-session';

const GITHUB_AUTH_URL = 'https://github.com/login/oauth/authorize';
const CLIENT_ID = '77695d5b515fdb7ecf87';
const REDIRECT_URI = 'http://localhost:3000/login';
const SCOPE = 'read:user';
const RESPONSE_TYPE = 'code';

export default async function handler(req, res) {
  const session = await getSession(req, res);

  const state = crypto.randomBytes(20).toString('hex');
  session.state = state;

  const url = `${GITHUB_AUTH_URL}?client_id=${CLIENT_ID}` +
    `&state=${state}` + 
    `&response_type=${RESPONSE_TYPE}` +
    `&redirect_uri=${REDIRECT_URI}` +
    `&scope=${SCOPE}`;
  res.redirect(url);
}