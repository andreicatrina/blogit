import React from "react";
import { GiVitruvianMan } from "react-icons/gi";
import { TbListSearch } from "react-icons/tb";
import {
  HeaderContainer,
  HeaderSection,
  LoginButton,
  LoginContainer,
  LogoContainer,
  SearchContainer,
  SecondHeaderLogo,
} from "./components";

export const Header = () => {
  return (
    <HeaderSection>
      <HeaderContainer>
        <LogoContainer>
          <h4>blog.It</h4>
          <SecondHeaderLogo>tI.golb</SecondHeaderLogo>
        </LogoContainer>
        <SearchContainer>
          <TbListSearch />
          <input type="text" placeholder="Search blogIt" />
        </SearchContainer>
        <LoginContainer>
          <LoginButton>
            <GiVitruvianMan />
            Log In
          </LoginButton>
        </LoginContainer>
      </HeaderContainer>
    </HeaderSection>
  );
};
