const GITHUB_AUTH_URL = 'https://github.com/login/oauth/authorize';
const CLIENT_ID = '77695d5b515fdb7ecf87';
const REDIRECT_URI = 'http://localhost:3000/login';
const SCOPE = 'read:user';
const RESPONSE_TYPE = 'code';

export default function Home() {
  const handleClick = () => {
    window.location.assign(
      `${GITHUB_AUTH_URL}?client_id=${CLIENT_ID}` + 
      `&response_type=${RESPONSE_TYPE}` +
      `&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}`
    );
  };

  return (
    <>
      <h1>GitHub OAuth2.0 예제</h1>

      <div>
        <button type="button" onClick={handleClick}>
          로그인하기
        </button>
      </div>
    </>
  )
}
