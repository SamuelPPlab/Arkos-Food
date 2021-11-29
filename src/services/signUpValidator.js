export const validateUserName = (userName) => {
  const userNameValidation = /^[a-z][a-z\s]*$/i.test(userName);
  if(userNameValidation) return false;
  return true;
};