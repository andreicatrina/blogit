import styled from "styled-components";

export const HeaderSection = styled.section`
  display: flex;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #ddd;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  padding: 4px 12px;
  background-color: white;
`;

export const LogoContainer = styled.div`
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  justify-content: center;
  width: 100%;

  h4 {
    font-family: "Tilt Neon", cursive;
    cursor: pointer;
    font-size: 20px;
  }
`;

export const SecondHeaderLogo = styled.h4`
  display: flex;
  justify-content: flex-end;
  rotate: 180deg;
  color: var(--color-orange);
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
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
export const LoginContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
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
