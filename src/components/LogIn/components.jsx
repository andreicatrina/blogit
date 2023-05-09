import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  position: absolute;
  top: 60px;
  gap: 60px;
  background: rgba(204, 195, 195, 0.5);
  -webkit-backdrop-filter: blur(21px);
  backdrop-filter: blur(21px);
  border: 1px solid rgba(204, 195, 195, 0.25);

  h2 {
    display: flex;
    gap: 12px;
    padding: 24px 24px;
    font-size: 32px;
    animation: fadeIn 2s;

    p {
      animation: fadeIn 3s;
    }

    span {
      color: var(--color-orange);
      animation: fadeIn 4s;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const LoginInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 360px;
  height: 400px;
  padding: 12px 12px;
  border-radius: 12px;
  background-color: white;
  animation: fadeIn 5s;

  h3 {
    font-size: 20px;
  }
`;

export const LoginCloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

export const CredentialsContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 12px;

  input {
    width: 100%;
    max-width: 280px;
    height: 32px;
    padding: 10px;
    border-radius: 6px;
    border: none;
    background: #f1f1f1;
    background: -webkit-linear-gradient(206deg, #f1f1f1 0%, #cfcfcf 100%);
    background: linear-gradient(206deg, #f1f1f1 0%, #cfcfcf 100%);
  }

  button {
    width: 100%;
    max-width: 210px;
    height: 40px;
    margin-bottom: 24px;
    border-radius: 6px;
    font-family: "Noto Sans", sans-serif;
    font-size: 16px;
    font-weight: 700;
    background: rgba(255, 255, 255, 0.45);
    -webkit-backdrop-filter: blur(7px);
    backdrop-filter: blur(7px);
    border: 1px solid var(--color-gray);
    transition: 0.6s;
    cursor: pointer;

    :hover {
      -webkit-box-shadow: 1px 1px 10px 2.5px #dddddd;
      -moz-box-shadow: 1px 1px 10px 2.5px #dddddd;
      box-shadow: 1px 1px 10px 2.5px #dddddd;
    }
  }
`;
