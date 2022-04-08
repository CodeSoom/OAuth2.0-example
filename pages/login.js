import { useState } from 'react';

import axios from 'axios';

import { useRouter } from 'next/router';

export default function AuthGithubPage() {
  const [name, setName] = useState('');
  const [accessToken, setAccessToken] = useState('');

  const { query: { code, state } } = useRouter();

  const handleClick = async () => {
    try {
      const { data } = await axios.post('/api/token', {
        code, state
      });
      setAccessToken(data.access_token);
    } catch (err) { 
      alert(err.response.data.message);
    }
  };

  const handleClickRequest = async () => {
    const { data } = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `token ${accessToken}`,
      },
    });
    setName(data.name)
  };

  return (
    <>
      <h1>GitHub Login Page</h1>

      <div>
        code:
        {' '}
        {code}
      </div>

      <div>
        accessToken:
        {' '}
        {accessToken}
      </div>

      <div>
        name:
        {' '}
        {name}
      </div>

      <button type="button" onClick={handleClick}>
        토큰 얻기
      </button>

      <button type="button" onClick={handleClickRequest}>
        계정 정보 요청하기
      </button>
    </>
  );
}
