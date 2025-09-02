export const setCookie = (name, value, options = {}) => {
  options = {
    path: '/',
    sameSite: 'Strict',
    secure: true,
    ...options
  };

  let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  for (let optionKey in options) {
    cookie += `; ${optionKey}`;
    const optionValue = options[optionKey];
    if (optionValue !== true) {
      cookie += `=${optionValue}`;
    }
  }

  document.cookie = cookie;
};

export const getCookie = (name) => {
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=').map(c => c.trim());
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
};

export const deleteCookie = (name) => {
  setCookie(name, '', {
    maxAge: -1
  });
};
