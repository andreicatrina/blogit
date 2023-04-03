import React from "react";
import { GiVitruvianMan } from "react-icons/gi";
import { TbListSearch } from "react-icons/tb";
import { Link } from "react-router-dom";
import {
  FirstHeaderLogo,
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
          <Link to="/">
            <FirstHeaderLogo>blog.It</FirstHeaderLogo>
          </Link>
          <Link to="/">
            <SecondHeaderLogo>tI.golb</SecondHeaderLogo>
          </Link>
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
