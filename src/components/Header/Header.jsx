import React from "react";
import { useState } from "react";
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
  SearchResultContainer,
  SearchResultParent,
  SecondHeaderLogo,
  ShortDescription,
} from "./components";

import { GiVitruvianMan } from "react-icons/gi";
import { TbListSearch } from "react-icons/tb";
import { GiTronArrow } from "react-icons/gi";
import { BsLink45Deg } from "react-icons/bs";

export const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  function onClickShowSearch() {
    if (showSearch === false) {
      setShowSearch(true);
    } else {
      setShowSearch(false);
    }
  }

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
        <SearchContainer
          onClick={onClickShowSearch}
          borderBottomLeft={showSearch ? "0" : "20px"}
          borderBottomRight={showSearch ? "0" : "20px"}
          borderBottom={showSearch ? "0" : "1px solid var(--color-ligth blue)"}
        >
          <SearchBarContainer>
            <TbListSearch />
            <input type="text" placeholder="Search blogIt" />
          </SearchBarContainer>
          {showSearch ? (
            <SearchBarResultsContainer>
              <h4>TRENDING TODAY</h4>
              <SearchResultParent>
                <SearchResultContainer>
                  <GiTronArrow />
                  <p>Abortion in Michigan</p>
                </SearchResultContainer>
                <ShortDescription>
                  Michigan Governor Gretchen Whitmer signs bill repealing 1931
                  abortion ban
                  <BsLink45Deg />
                </ShortDescription>
              </SearchResultParent>
              <SearchResultParent>
                <SearchResultContainer>
                  <GiTronArrow />
                  <p>Tiger Woods</p>
                </SearchResultContainer>
                <ShortDescription>
                  Tiger Woods witdraws from Masters due to injury, organizers
                  say | CNN
                  <BsLink45Deg />
                </ShortDescription>
              </SearchResultParent>
            </SearchBarResultsContainer>
          ) : null}
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
