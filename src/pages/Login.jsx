import React, { useEffect, useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import { emailValidator, passwordLengthValidator } from '../services/validators';
import ArkosFoodLogo from '../images/ArkosFoodLogo.png';
import ShoppingCart from '../images/ShoppingCart.png';
import '../CSS/loginPage.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const isEmailValid = emailValidator(email);
    const isPasswordValid = passwordLengthValidator(passwordInput);
    if(isEmailValid && isPasswordValid) {
      setIsDisabled(false);
    }
  }, [email, passwordInput]);

  if (redirect) return <Navigate to="/main" />;

  const inputBoxTextStyle = {
    width: '51px',
    height: '27px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '150%',
    letterSpacing: '0.007em',
    color: '#1C2025',
    paddingTop: '30px',
    paddingLeft: '25px',
    paddingBottom: '50px'
  };

  const nameInputProps = {
    id: "email",
    name: "Email",
    fieldValue: email,
    setFieldValue: setEmail,
    type: "email",
    style: inputBoxTextStyle,
    className: 'inputBox',
  };

  const passwordInputProps = {
    id: "password",
    name: "Password",
    fieldValue: passwordInput,
    setFieldValue: setPasswordInput,
    type: "password",
    style: inputBoxTextStyle,
    className: 'inputBox',
  };

  const loginButtonProps = {
    name: "Entrar",
    id: "submitLogin",
    onClick: () => setRedirect(true),
    disabled:  isDisabled,
    className: isDisabled ? 'submitLoginDisabled' : 'submitLoginEnabled',
  };

  const welcomeStyle = {
    paddingTop: '20%',
    font: 'Roboto',
    fontWeight: '500',
    style: 'normal',
    fontSize: '36px',
    lineHeight: '120%',
    letterSpacing: '0.007em',
    color: '#1C2025'
  };

  const noAccountStyle = {
    width: '150px',
    height: '18px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '150%',
    letterSpacing: '0.007em',
    marginLeft: '200px',
    marginTop: '10px',
    color: '#1C2025',
  };

  const fullArkosLogo = <img src={ArkosFoodLogo} style={{ marginTop: '16px', marginLeft: '80px', position: 'absolute' }} />;
  const shoppingCartIMG = <img src={ShoppingCart} alt="Shopping Cart" style={{ marginLeft: '80px', marginTop: '200px' }} />; 

  const noAccount = <div style={noAccountStyle}>
    Ainda não possui cadastro? <Link to="/signup">Cadastre-se</Link>
  </div>;

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '50%', backgroundColor: '#E0E5F2', height: '100vh' }}>
        {fullArkosLogo}
        {shoppingCartIMG}
      </div>
      <div style={{ width: '50%', textAlign: 'center', height: '100%' }}>
        <div id="loginFormContainer">
          <h1 style={welcomeStyle}>Seja bem-vindo!</h1>
          <Input {...nameInputProps} />
          <Input {...passwordInputProps} />
          <Button {...loginButtonProps} />
          {noAccount}
        </div>
      </div>
    </div>
  );
};

export default Login;