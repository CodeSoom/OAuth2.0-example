import axios from 'axios';

const clientId = '77695d5b515fdb7ecf87';
const clientSecret = process.env.CLIENT_SECRET;

export default async function handler(req, res) {
  const { code } = req.body;
  const { data } = await axios
    .post('https://github.com/login/oauth/access_token', {
      client_id: clientId,
      client_secret: clientSecret,
      code,
    }, {
      headers: {
        accept: 'application/json',
      }
    });
  res.status(200).send(data);
}
