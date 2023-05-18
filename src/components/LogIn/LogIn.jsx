import React, { useState, useHistory } from "react";
import {
  CredentialsContainer,
  ErrorParagraph,
  FacebookButton,
  GoogleButton,
  LoginCloseContainer,
  LoginContainer,
  LoginInputsContainer,
  SocialMediaButtonsContainer,
  SuccessParagraph,
  GithubButton,
} from "./components";

import { IoMdClose } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import {
  signInUserWithEmailAndPassword,
  signInWithFacebook,
  signInUserWithGoogle,
  signInWithGithub,
} from "../../utils/firebase";

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

  const onclickSignInFacebook = async () => {
    const result = await signInWithFacebook();
    console.log(result);
  };

  const onClickSignInGoogle = async () => {
    const result = await signInUserWithGoogle();
    console.log(result);
  };

  const onClickSignInGithub = async () => {
    const result = await signInWithGithub();
    console.log(result);
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
        <SocialMediaButtonsContainer>
          <FacebookButton onClick={onclickSignInFacebook}>
            <BsFacebook />
          </FacebookButton>
          <GoogleButton onClick={onClickSignInGoogle}>
            <FcGoogle />
          </GoogleButton>
          <GithubButton onClick={onClickSignInGithub}>
            <BsGithub />
          </GithubButton>
        </SocialMediaButtonsContainer>
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
