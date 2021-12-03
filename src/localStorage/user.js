import { getLocalStorageKey } from "./getKey";

export const userRegistration = (fullName, password, email) => {
  const users = getLocalStorageKey('users');
  const newUser = { fullName, password, email, id: users.length };
  localStorage.setItem('users', JSON.stringify([...users, newUser]));
  localStorage.setItem('currentUser', JSON.stringify(newUser));
};
