const checkLogin = (email, passwordInput) => {
  const validEmail = emailValidator(email);
  const minPasswordLength = 8;
  const validPassword = passwordInput.length >= minPasswordLength;
  if (validEmail && validPassword) return false;
  return true;
};

export const emailValidator = (email) => {
  return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{3})$/i);
};

export default checkLogin;
