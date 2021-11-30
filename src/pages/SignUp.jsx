import React, { useEffect, useState } from "react";
import Input from '../components/Input';
import Button from '../components/Button';
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import { emailValidator, passwordLengthValidator, passwordMatcher, validateUserName } from "../services/validators";


const SignUp = () => {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [goToMain, setGoToMain] = useState(false);
  const [disableSignUp, setDisableSignUp] = useState(true);

  useEffect(() => {
    const isUsernameValid = validateUserName(fullName);
    const isEmailValid = emailValidator(email);
    const isPasswordValid = passwordLengthValidator(passwordInput);
    const doPasswordsMatch = passwordMatcher(passwordInput, confirmPassword);
    if(isEmailValid && isUsernameValid && isPasswordValid && doPasswordsMatch) {
      return setDisableSignUp(false);
    }
    setDisableSignUp(true);
  }, [fullName, email, passwordInput, confirmPassword]);

  const nameProps = {
    id: 'nomeCompleto',
    name: 'Nome Completo',
    fieldValue: fullName,
    setFieldValue: setFullName,
  };

  const emailProps = {
    id: "email",
    name: "Email",
    fieldValue: email,
    setFieldValue: setEmail,
    type: "email",
  };

  const passwordInputProps = {
    id: "Senha",
    name: "Senha",
    fieldValue: passwordInput,
    setFieldValue: setPasswordInput,
    type: "password",
  };

  const confirmPasswordProps = {
    id: "ConfirmarSenha",
    name: "Confirmar Senha",
    fieldValue: confirmPassword,
    setFieldValue: setConfirmPassword,
    type: "password",
  };

  const signUpButtonProps = {
    id: "Cadastrar",
    name: "Cadastrar",
    onClick: () => setGoToMain(true),
    disabled: disableSignUp,
  };

  const alreadySingnedUp = <div>
    Já possui um cadastro? <Link to="/">Login</Link>
  </div>;

  if(goToMain) return <Navigate to="/main" />;

  return (
    <div>
      <Input {...nameProps} />
      {(!validateUserName(fullName) && fullName !== '') && <div>O nome deve conter apenas letras!</div>}
      <Input {...emailProps} />
      {(!emailValidator(email) && email !== '') && <div>O email deve ter o formato correto.</div>}
      <Input {...passwordInputProps} />
      {(!passwordLengthValidator(passwordInput) && passwordInput !== '') && <div>A senha deve ter pelo menos oito caracteres.</div>}
      <Input {...confirmPasswordProps} />
      {!passwordMatcher(passwordInput, confirmPassword) && <div>As senhas devem ser iguais.</div>}
      {alreadySingnedUp}
      <Button {...signUpButtonProps} />
    </div>
  );
};

export default SignUp;
