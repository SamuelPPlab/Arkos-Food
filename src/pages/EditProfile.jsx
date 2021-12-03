import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";
import Button from "../components/Button";
import Input from "../components/Input";
import { emailValidator, validateUserName } from "../services/validators";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";
import "../CSS/editProfile.css";
import "../CSS/loginPage.css";
import { getLocalStorageKey } from "../localStorage/getKey";
import { editUserInfo } from "../localStorage/user";

const EditProfile = () => {
  const { email, fullName } = getLocalStorageKey('currentUser');

  const [name, setFullName] = useState(fullName);
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

  const fullNameProps = {
    id: 'EditarNomeCompleto',
    name: 'Nome Completo',
    fieldValue: name,
    setFieldValue: setFullName,
    className: 'input',
  };

  const currentEmailProps = {
    id: "currentEmail",
    name: "Email Atual",
    fieldValue: email,
    readOnly: true,
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
      editUserInfo(email, name, newEmail);
    },
    disabled: disableEditDetails,
    className: disableEditDetails ? 'editProfileButtonInactive' : 'editProfileButtonActive',
  };

  if(goBackToMain) return <Navigate to="/main" />;

  const nameWarning = <div className="warningText">O nome deve conter apenas letras!</div>;
  const emailWarning = <div className="warningText">O email deve ter o formato correto.</div>;

  return(
    <div id="editProfileForm">
      <Header />
      <NavigationBar currentPage="Editar Perfil" />
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
        <div id="formContainer">
          <Input {...fullNameProps} />
          {(!validateUserName(fullName) && fullName !== '') && nameWarning}
          <Input {...currentEmailProps} />
          <Input {...NewEmailProps} />
          {(!emailValidator(newEmail) && newEmail !== '') && emailWarning}
          <Button {...editProfileProps} />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
