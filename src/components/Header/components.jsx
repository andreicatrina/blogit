import styled from "styled-components";

export const HeaderSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #ddd;
  height: 64px;
  position: fixed;
  top: 0;
  z-index: 10;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin: 0 auto; */
  width: 100%;
  max-width: 1600px;
  padding: 4px 12px;
  background-color: white;
  position: fixed;
  top: 0;
  z-index: 10;
`;

export const LogoContainer = styled.div`
  display: flex;
  /* align-items: flex-start; */
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 0 8px;

  a {
    display: flex;
    justify-content: flex-start;
    text-decoration: none;
  }
`;

export const FirstHeaderLogo = styled.span`
  display: flex;
  justify-content: flex-start;
  font-family: "Tilt Neon", cursive;
  font-size: 20px;
  font-weight: 700;
  color: #1c1c1c;
`;

export const SecondHeaderLogo = styled.span`
  display: flex;
  justify-content: flex-end;
  font-family: "Tilt Neon", cursive;
  font-size: 20px;
  font-weight: 700;
  rotate: 180deg;
  color: var(--color-orange);
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  border: 1px solid #ddd;
  padding: 0 8px;
  border-radius: 20px;
  margin: 0 8px;
  background-color: #f6f7f8;

  :hover {
    border-color: var(--color-light-blue);
  }

  svg {
    margin: 0 6px;
    width: 22px;
    height: 22px;
    color: #9a9a9a;
  }

  input {
    width: 100%;
    max-width: 500px;
    height: 40px;
    border: none;
    border-radius: 16px;
    color: #1b2838;
    background-color: #f6f7f8;

    :focus {
      outline: none;
    }
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchBarResultsContainer = styled.div`
  display: none;
`;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 0 8px;
`;

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 4px;
  width: 100%;
  max-width: 120px;
  height: 32px;
  background-color: var(--color-orange);
  border: none;
  border-radius: 16px;
  font-family: "Noto Sans", sans-serif;
  color: white;
  font-weight: 700;
  cursor: pointer;
  transition: 0.6s;

  :hover {
    background-color: #1c1c1c;

    svg {
      color: var(--color-orange);
    }
  }

  svg {
    width: 20px;
    height: 20px;
    margin-right: 16px;
    margin-left: 2px;
    transition: 0.6s;
  }
`;
