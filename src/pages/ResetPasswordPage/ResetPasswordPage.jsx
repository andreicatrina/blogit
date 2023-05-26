import React from "react";
import { useState } from "react";

import { PageLayout } from "../PageLayout/PageLayout";
import { SideMenu } from "../LandingPage/LandingPage";
import {
  ErrorMessage,
  HomeSpanLink,
  InputButtonForm,
  ResetInputContainer,
  SideMenuParent,
  SuccessMessage,
} from "./components";

import { Link } from "react-router-dom";

import { resetUserPassword } from "../../utils/firebase";

export const ResetPasswordPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [error, setError] = useState("");
  const [step, setStep] = useState("");

  const oninputChange = (event) => {
    setUserEmail(event.currentTarget.value);
    console.log(userEmail);
  };

  const onSubmitRequestResetPassword = async (event) => {
    event.preventDefault();

    setError("");

    if (userEmail === "") {
      setError("Please type your email address");
      return;
    }

    try {
      setStep("Sending Request");
      await resetUserPassword(userEmail);
      setStep("Success");
    } catch (error) {
      const errorMessage = error.message;
      console.log(errorMessage);

      if (error.code === "auth/user-not-found") {
        setError("User doesn't exist");
      } else {
        setError(error.code);
      }
    }
  };

  return (
    <PageLayout>
      <SideMenuParent>
        <SideMenu />
        <ResetInputContainer>
          <h3>Reset your password</h3>
          <InputButtonForm onSubmit={onSubmitRequestResetPassword}>
            <input
              onChange={oninputChange}
              type="email"
              placeholder="Type your email"
            />
            <button>Reset</button>
          </InputButtonForm>
          {step === "Success" ? (
            <SuccessMessage>Check your email address</SuccessMessage>
          ) : null}
          {error ? <ErrorMessage>{error}</ErrorMessage> : null}
          <Link to="/">{`<< Back Home`}</Link>
        </ResetInputContainer>
      </SideMenuParent>
    </PageLayout>
  );
};
