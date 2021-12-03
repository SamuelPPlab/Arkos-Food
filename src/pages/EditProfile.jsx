import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";
import Button from "../components/Button";
import Input from "../components/Input";
import { emailValidator, validateUserName } from "../services/validators";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";
import "../CSS/editProfile.css";

const EditProfile = () => {

  const [fullName, setFullName] = useState('');
  const [currentEmail, setCurrentEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [disableEditDetails, setDisableEditDetails] = useState(true);
  const [goBackToMain, setGoBackToMain] = useState(false);

  useEffect(() => {
    const isUsernameValid = validateUserName(fullName);
    const isNewEmailValid = emailValidator(newEmail);

    if(isNewEmailValid && isUsernameValid) {
      return setDisableEditDetails(false);
    }
    return setDisableEditDetails(true);
  }, [fullName, newEmail]);

  const inputStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  };

  const fullNameProps = {
    id: 'EditarNomeCompleto',
    name: 'Nome Completo',
    fieldValue: fullName,
    setFieldValue: setFullName,
    className: 'input',
  };

  const currentEmailProps = {
    id: "currentEmail",
    name: "Email Atual",
    fieldValue: currentEmail,
    setFieldValue: setCurrentEmail,
    type: "email",
    className: 'input',
  };

  const NewEmailProps = {
    id: "newEmail",
    name: "Novo Email",
    fieldValue: newEmail,
    setFieldValue: setNewEmail,
    type: "email",
    className: 'input',
  };

  const editProfileProps = {
    id: "editProfileButton",
    name: "Alterar Dados",
    onClick: () => {
      setGoBackToMain(true);
    },
    disabled: disableEditDetails,
    className: disableEditDetails ? 'editProfileButtonInactive' : 'editProfileButtonActive',
  };

  if(goBackToMain) return <Navigate to="/main" />;

  const nameWarning = <div>O nome deve conter apenas letras!</div>;
  const emailWarning = <div>O email deve ter o formato correto.</div>;

  return(
    <div id="editProfileForm">
      <Header />
      <NavigationBar currentPage="Editar Perfil" />
      <div id="formContainer">
        <div style={inputStyle}>
          <Input {...fullNameProps} />
          {(!validateUserName(fullName) && fullName !== '') && nameWarning}
        </div>
        <div style={inputStyle}>
          <Input {...currentEmailProps} />
        </div>
        <div style={inputStyle}>
          <Input {...NewEmailProps} />
          {(!emailValidator(newEmail) && newEmail !== '') && emailWarning}
        </div>
        <div style={inputStyle}>
          <Button {...editProfileProps} />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
