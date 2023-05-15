import React, { useState, useHistory } from "react";
import {
  CredentialsContainer,
  ErrorParagraph,
  LoginCloseContainer,
  LoginContainer,
  LoginInputsContainer,
  SuccessParagraph,
} from "./components";

import { IoMdClose } from "react-icons/io";
import { signInUserWithEmailAndPassword } from "../../utils/firebase";

export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successLogin, setSuccessLogin] = useState("");

  const onEmailChange = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onLoginSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessLogin("");

    if (!email || !password) {
      setError("Check your credentials");
      return;
    }
    console.log(email, password);

    try {
      await signInUserWithEmailAndPassword(email, password);
      setSuccessLogin("User signed in!");
    } catch (error) {
      console.log(error);

      if (error.code === "auth/wrong-password") {
        setError("Credentiale gresite!");
      }
    }
  };

  return (
    <LoginContainer>
      <h2>
        Connect <p>to</p> <span>blogIt</span>
      </h2>
      <LoginInputsContainer>
        <LoginCloseContainer>
          <IoMdClose />
        </LoginCloseContainer>
        <h3>Connect</h3>
        <CredentialsContainer onSubmit={onLoginSubmit}>
          <input type="email" placeholder="Email" onChange={onEmailChange} />
          <input
            type="password"
            placeholder="Password"
            onChange={onPasswordChange}
          />
          <button>Log In</button>
          <ErrorParagraph>{error}</ErrorParagraph>
          <SuccessParagraph>{successLogin}</SuccessParagraph>
          <a>No account? Sign up!</a>
        </CredentialsContainer>
      </LoginInputsContainer>
    </LoginContainer>
  );
};
