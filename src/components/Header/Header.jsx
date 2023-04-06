import React from "react";

import { Link } from "react-router-dom";
import {
  FirstHeaderLogo,
  HeaderContainer,
  HeaderSection,
  LoginButton,
  LoginContainer,
  LogoContainer,
  SearchBarContainer,
  SearchBarResultsContainer,
  SearchContainer,
  SecondHeaderLogo,
} from "./components";

import { GiVitruvianMan } from "react-icons/gi";
import { TbListSearch } from "react-icons/tb";
import { GiTronArrow } from "react-icons/gi";
import { BsLink45Deg } from "react-icons/bs";

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
          <SearchBarContainer>
            <TbListSearch />
            <input type="text" placeholder="Search blogIt" />
          </SearchBarContainer>
          <SearchBarResultsContainer>
            <h4>TRENDING TODAY</h4>
            <div>
              <div>
                <GiTronArrow />
                <p>Abortion in Michigan</p>
              </div>
              <div>
                <span>
                  Michigan Governor Gretchen Whitmer signs bill repealing 1931
                  abortion ban
                </span>
                <BsLink45Deg />
              </div>
            </div>
          </SearchBarResultsContainer>
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
