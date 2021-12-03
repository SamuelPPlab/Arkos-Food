import { getLocalStorageKey } from "./getKey";

export const userRegistration = (fullName, password, email) => {
  const users = getLocalStorageKey('users');
  const newUser = { fullName, password, email, id: users.length };
  localStorage.setItem('users', JSON.stringify([...users, newUser]));
  localStorage.setItem('currentUser', JSON.stringify(newUser));
};

export const login = (email, password) => {
  const users = getLocalStorageKey('users');
  const userLoggingIn = users.find((registeredUser) => registeredUser.email === email);
  if(!userLoggingIn || userLoggingIn.password !== password) {
    return false;
  }
  localStorage.setItem('currentUser', JSON.stringify(userLoggingIn));
  return true;
};

export const editUserInfo = (currentEmail, newName, newEmail) => {
  let users = getLocalStorageKey('users');
  const currentUser = users.find((registeredUser) => registeredUser.email === currentEmail);
  const editedUser = { ...currentUser, fullName: newName, email: newEmail };
  users = users.filter((user) => (user !== currentUser));
  users = [...users, editedUser];
  
  localStorage.setItem('currentUser', JSON.stringify(editedUser));
  localStorage.setItem('users', JSON.stringify([...users, editedUser]));
};
