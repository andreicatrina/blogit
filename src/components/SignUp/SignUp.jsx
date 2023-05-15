import React, { useState } from "react";

import { signUpWithEmailAndPassword } from "../../utils/firebase";

import { IoMdClose } from "react-icons/io";
import {
  CredentialsContainer,
  ErrorParagraph,
  SignUpCloseContainer,
  SignUpContainer,
  SignUpInputsContainer,
  SuccessParagraph,
  UserConnectContainer,
} from "./components";
import { LogIn } from "../LogIn/LogIn";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPass, setCheckPass] = useState("");
  const [name, setName] = useState("");
  const [signupError, setSignupError] = useState(undefined);
  const [succesSignUp, setSuccessSignUp] = useState(undefined);

  const [openLogin, setOpenLogin] = useState(false);

  function onClickOpenLogin() {
    if (openLogin === false) {
      setOpenLogin(true);
    } else {
      setOpenLogin(false);
    }
  }

  function onEmailChange(e) {
    setEmail(e.currentTarget.value);
  }

  function onPasswordChange(e) {
    setPassword(e.currentTarget.value);
  }

  function onCheckPasswordChange(e) {
    setCheckPass(e.currentTarget.value);
  }

  function onNameChange(e) {
    setName(e.currentTarget.value);
  }

  const onSignUpSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    setSignupError("");
    setSuccessSignUp("");

    if (!email || !password) {
      return;
    } else if (password !== checkPass) {
      setSignupError("Password does not match!");
      return;
    } else if (!name) {
      setSignupError("Please complete field name");
      return;
    }

    try {
      await signUpWithEmailAndPassword(email, password);

      setSuccessSignUp("User succesfully created");
    } catch (error) {
      console.log(JSON.stringify(error, undefined, "  "));

      // setLoginError(error.message);

      if (error.code === "auth/email-already-in-use") {
        setSignupError("User already exists!");
      } else if (error.code === "auth/weak-password") {
        setSignupError("Password too weak!");
      }
    }
  };

  return (
    <SignUpContainer>
      <UserConnectContainer alignItems={openLogin ? "flex-end" : "center"}>
        <h2>
          Create <p>your</p> <span>account</span>
        </h2>
        <SignUpInputsContainer>
          <SignUpCloseContainer>
            <IoMdClose />
          </SignUpCloseContainer>
          <h3>Sign Up</h3>
          <CredentialsContainer onSubmit={onSignUpSubmit}>
            <input onChange={onNameChange} placeholder="Name" type="text" />
            <input onChange={onEmailChange} placeholder="Email" type="email" />
            <input
              onChange={onPasswordChange}
              placeholder="Password"
              type="password"
            />
            <input
              onChange={onCheckPasswordChange}
              placeholder="Repeat Password"
              type="password"
            />
            <button>Sign Up</button>
            <ErrorParagraph>{signupError}</ErrorParagraph>
            <SuccessParagraph>{succesSignUp}</SuccessParagraph>
            <a onClick={onClickOpenLogin}>Have an account? Log in!</a>
          </CredentialsContainer>
        </SignUpInputsContainer>
      </UserConnectContainer>
      {openLogin ? <LogIn /> : null}
    </SignUpContainer>
  );
};
