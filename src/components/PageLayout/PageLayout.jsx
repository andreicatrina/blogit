import React from "react";
import { Header } from "../Header/Header";
import { Container, Content } from "./components";

export const PageLayout = function (props) {
  return (
    <Container>
      <Header />
      <Content>{props.children}</Content>
    </Container>
  );
};
