import React, { useState } from "react";
import {
  CredentialsContainer,
  LoginCloseContainer,
  LoginContainer,
  LoginInputsContainer,
} from "./components";

import { signUpWithEmailAndPassword } from "../../utils/firebase";

import { IoMdClose } from "react-icons/io";

export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onEmailChange(e) {
    setEmail(e.currentTarget.value);
  }

  function onPasswordChange(e) {
    setPassword(e.currentTarget.value);
  }

  const onSignUpSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);

    if (!email || !password) {
      return;
    }
    try {
      await signUpWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginContainer>
      <h2>
        Welcome <p>to</p> <span>blogIt</span>
      </h2>
      <LoginInputsContainer>
        <LoginCloseContainer>
          <IoMdClose />
        </LoginCloseContainer>
        <h3>Connect</h3>
        <CredentialsContainer onSubmit={onSignUpSubmit}>
          <input onChange={onEmailChange} type="email" />
          <input onChange={onPasswordChange} type="password" />
          <button>Log In</button>
        </CredentialsContainer>
      </LoginInputsContainer>
    </LoginContainer>
  );
};
