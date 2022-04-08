import nextSession from 'next-session';

const options = {
  name: 'sessionId',
}

export const getSession = nextSession(options);