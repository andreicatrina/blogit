import React from "react";
import { PageLayout } from "../PageLayout/PageLayout";
import { SideMenu } from "../LandingPage/LandingPage";
import {
  HomeSpanLink,
  InputButtoForm,
  ResetInputContainer,
  SideMenuParent,
} from "./components";

import { Link } from "react-router-dom";

export const ResetPasswordPage = () => {
  return (
    <PageLayout>
      <SideMenuParent>
        <SideMenu />
        <ResetInputContainer>
          <h3>Reset your password</h3>
          <InputButtoForm>
            <input type="email" placeholder="Type your e-mail" />
            <button>Reset</button>
          </InputButtoForm>
          <Link to="/">{`<< Back Home`}</Link>
        </ResetInputContainer>
      </SideMenuParent>
    </PageLayout>
  );
};
