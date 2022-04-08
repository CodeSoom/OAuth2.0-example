export default function Home() {
  const handleClick = () => {
    window.location.assign('/api/auth');
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
