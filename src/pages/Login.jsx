import React, { useEffect, useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import { emailValidator, passwordLengthValidator } from '../services/validators';
import ArkosFood from '../images/ArkosFood.png';
import ForkAndKnife from '../images/ForkAndKnife.png';
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
  const forkAnkdKnifeIMG = <img src={ForkAndKnife} alt="Fork And Knife" />;
  const fullArkosLogo = <div style={{ marginTop: '16px', marginLeft: '80px' }}>{forkAnkdKnifeIMG}{arkosFoodIMG}</div>;
  const shoppingCartIMG = <img src={ShoppingCart} alt="Shopping Cart" style={{ marginLeft: '80px', marginTop: '120px' }} />; 

  const noAccount = <div>
    Ainda não tem uma conta? <Link to="/signup">Clique aqui!</Link>
  </div>;

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '50%', backgroundColor: '#E0E5F2', height: '100vh' }}>
        {fullArkosLogo}
        {shoppingCartIMG}
      </div>
      <div style={{ width: '50%', textAlign: 'center', height: '100%' }}>
        <p>Seja Bem-Vindo!</p>
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