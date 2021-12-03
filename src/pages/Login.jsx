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
    marginLeft: '-430px',
    paddingBottom: '50px'
  };

  const nameInputProps = {
    id: "email",
    name: "Email",
    fieldValue: email,
    setFieldValue: setEmail,
    type: "email",
    style: inputBoxTextStyle,
    className: 'inputBoxLogin',
  };

  const passwordInputProps = {
    id: "password",
    name: "Password",
    fieldValue: passwordInput,
    setFieldValue: setPasswordInput,
    type: "password",
    style: inputBoxTextStyle,
    className: 'inputBoxLogin',
  };

  const loginButtonProps = {
    name: "Entrar",
    id: "submitLogin",
    onClick: () => setRedirect(true),
    disabled:  isDisabled,
    className: isDisabled ? 'submitLoginDisabled' : 'submitLoginEnabled',
  };

  const fullArkosLogo = <img src={ArkosFoodLogo} style={{ marginTop: '16px', marginLeft: '80px', position: 'absolute' }} />;
  const shoppingCartIMG = <img src={ShoppingCart} alt="Shopping Cart" style={{ marginLeft: '80px', marginTop: '200px' }} />;

  const emailWarning = <div className="warningText">O email deve ter o formato correto.</div>;
  const passwordLengthWarning = <div className="warningText">A senha deve ter pelo menos oito caracteres.</div>;

  const noAccount = <pre className="noAccount">Ainda não possui cadastro? <Link to="/signup">Cadastre-se</Link></pre>;

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '50%', backgroundColor: '#E0E5F2', height: '100vh' }}>
        {fullArkosLogo}
        {shoppingCartIMG}
      </div>
      <div style={{ width: '50%', textAlign: 'center', height: '100%' }}>
        <div id="loginFormContainer">
          <h1 className='welcomeText'>Seja bem-vindo!</h1>
          <Input {...nameInputProps} />
          {(!emailValidator(email) && email !== '') && emailWarning}
          <Input {...passwordInputProps} />
          {(!passwordLengthValidator(passwordInput) && passwordInput !== '') && passwordLengthWarning}
          <Button {...loginButtonProps} />
          {noAccount}
        </div>
      </div>
    </div>
  );
};

export default Login;