export const emailValidator = (email) => {
  return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{3})$/i);
};

export const validateUserName = (userName) => {
  return /^[a-z][a-z\s]*$/i.test(userName);
};

export const passwordLengthValidator = (password) => {
  const minPasswordLength = 8;
  return password >= minPasswordLength;
};
