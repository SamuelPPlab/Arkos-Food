import React, { useEffect, useState } from "react";
import Input from '../components/Input';
import Button from '../components/Button';
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import { validateUserName } from "../services/signUpValidator";
import { emailValidator } from "../services/loginValidator";

const SignUp = () => {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [goToMain, setGoToMain] = useState(false);
  const [allowSignUp, setAllowSignUp] = useState(false);

  useEffect(() => {
    const isUsernameValid = validateUserName(fullName);
    const isEmailValid = emailValidator(email);
  }, [fullName]);

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
    disabled: allowSignUp,
  };

  const alreadySingnedUp = <div>
    Já possui um cadastro? <Link to="/">Login</Link>
  </div>;

  if(goToMain) return <Navigate to="/main" />;

  return (
    <div>
      <Input {...nameProps} />
      {(allowSignUp && fullName !== '') && <div>O nome deve conter apenas letras!</div>}
      <Input {...emailProps} />
      <Input {...passwordInputProps} />
      <Input {...confirmPasswordProps} />
      {alreadySingnedUp}
      <Button {...signUpButtonProps} />
    </div>
  );
};

export default SignUp;
