import styled from "styled-components";

export const SideMenuParent = styled.div`
  width: 100%;
  /* max-width: 300px; */
  height: 100%;
  background-color: #fff;
  position: relative;
`;

export const ResetInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  position: absolute;
  top: 120px;
  left: 50%;

  a {
    color: black;
    text-decoration: none;
    font-family: "Noto Sans", sans-serif;
    font-size: 12px;
    font-weight: 500;
    padding: 2px 4px;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.6s;

    :hover {
      border: 1px solid var(--color-orange);
      transform: scale(1.1);
    }
  }
`;

export const InputButtoForm = styled.form`
  display: flex;
  align-items: center;
  gap: 12px;

  button {
    color: var(--color-orange);
    background-color: white;
    border: none;
    width: 60px;
    height: 24px;
    border-radius: 4px;
    font-family: "Noto Sans", sans-serif;
    font-weight: 600;
    cursor: pointer;
    transition: 0.6s;

    :hover {
      color: white;
      background-color: var(--color-orange);
    }
  }

  input {
    height: 24px;
    border: none;
    border-radius: 4px;
    padding: 0;
    padding-left: 6px;
    padding-bottom: 2px;
    font-family: "Noto Sans", sans-serif;
  }

  input:focus {
    background-color: var(--color-light-gray);
  }

  input::placeholder {
    color: var(--color-orange);
  }
`;
