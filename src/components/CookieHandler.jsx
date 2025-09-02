import { setCookie, getCookie } from '../utils/cookieUtils';

export const CookieHandler = () => {
  const handleCookieSet = () => {
    setCookie('user_preference', 'value', {
      maxAge: 86400, // 24 hours
      sameSite: 'Strict',
      secure: true,
      path: '/'
    });
  };

  return (
    <div>
      <button 
        onClick={handleCookieSet}
        className="btn-primary"
      >
        Set Secure Cookie
      </button>
    </div>
  );
};
