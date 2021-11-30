import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import checkLogin from '../services/loginValidator';
import Input from '../components/Input';
import Button from '../components/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    setIsDisabled(checkLogin(email, passwordInput));
  }, [email, passwordInput]);

  if (redirect) return <Redirect to="/main" />;

  const nameInputProps = {
    id: "email",
    name: "Email",
    fieldValue: email,
    setFieldValue: setEmail,
    type: "email",
  };

  const passwordInputProps = {
    id: "password",
    name: "Password",
    fieldValue: passwordInput,
    setFieldValue: setPasswordInput,
    type: "password",
  };

  const loginButtonProps = {
    name: "Entrar",
    id: "submitLogin",
    onClick: () => setRedirect(true),
    disabled:  isDisabled,
  };

  return (
    <div>
      <Input {...nameInputProps} />
      <Input {...passwordInputProps} />
      <Button {...loginButtonProps} />
    </div>
  );
};

export default Login;