import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";
import Button from "../components/Button";
import Input from "../components/Input";
import { emailValidator, validateUserName } from "../services/validators";

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
  }, [fullName, newEmail])

  const fullNameProps = {
    id: 'EditarNomeCompleto',
    name: 'Nome Completo',
    fieldValue: fullName,
    setFieldValue: setFullName,
  };

  const currentEmailProps = {
    id: "currentEmail",
    name: "Email Atual",
    fieldValue: currentEmail,
    setFieldValue: setCurrentEmail,
    type: "email",
  };

  const NewEmailProps = {
    id: "newEmail",
    name: "Novo Email",
    fieldValue: newEmail,
    setFieldValue: setNewEmail,
    type: "email",
  };

  const editProfileProps = {
    id: "editDetails",
    name: "Alterar Dados",
    onClick: () => {
      setGoBackToMain(true);
    },
    disabled: disableEditDetails,
  };

  if(goBackToMain) return <Navigate to="/main" />;

  const nameWarning = <div>O nome deve conter apenas letras!</div>;
  const emailWarning = <div>O email deve ter o formato correto.</div>;

  return(
    <div>
      <Input {...fullNameProps} />
      {(!validateUserName(fullName) && fullName !== '') && nameWarning}
      <Input {...currentEmailProps} />
      <Input {...NewEmailProps} />
      {(!emailValidator(newEmail) && newEmail !== '') && emailWarning}
      <Button {...editProfileProps} />
    </div>
  );
};

export default EditProfile;
