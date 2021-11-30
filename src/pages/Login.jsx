import React, { useEffect, useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import { emailValidator, passwordLengthValidator } from '../services/validators';
import ArkosFood from '../images/ArkosFood.png';
import ForkAndKnife from '../images/ForkAndKnife.png';
import LeftLoginRectangle from '../images/LeftLoginRectangle.png';
import ShoppingCart from '../images/ShoppingCart.png';

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

  const arkosFoodIMG = <img src={ArkosFood} alt="Arkos logo" />;
  const forkAnkdKnifeIMG = <img src={ForkAndKnife} alt="Fork And Knife" style={{ position: 'relative' }} />;
  const fullArkosLogo = <div style={{ position: 'relative', marginTop: '16px', marginLeft: '80px' }}>{forkAnkdKnifeIMG}{arkosFoodIMG}</div>;
  const backgroundRectangleIMG = <img src={LeftLoginRectangle} alt="background" style={{ position: 'absolute' }} />;
  const shoppingCartIMG = <img src={ShoppingCart} alt="Shopping Cart" style={{ position: 'relative', marginTop: '284px', marginLeft: '84px' }} />; 

  const noAccount = <div>
    Ainda não tem uma conta? <Link to="/signup">Clique aqui!</Link>
  </div>;

  return (
    <div style={{ display: 'flex', maxHeight: '100%' }}>
      <div style={{ width: '50%' }}>
        {backgroundRectangleIMG}
        {fullArkosLogo}
        {shoppingCartIMG}
      </div>
      <div style={{ width: '50%', textAlign: 'center' }}>
      Seja Bem-Vindo!
      <Input {...nameInputProps} />
      <Input {...passwordInputProps} />
      <div>
        <Button {...loginButtonProps} />
      </div>
      {noAccount}
    </div>
    </div>
  );
};

export default Login;