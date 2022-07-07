import React from "react";
import ListBlock from "../listBlock";
import { Container, Title } from "./style";

const Sider = ({ items }) => {
  return (
    <Container>
      <Title>Data Blocks</Title>
      <ListBlock id="datas" list={items.datas} />
      <Title>Function Blocks</Title>
      <ListBlock id="funcs" list={items.funcs} />
    </Container>
  );
};

export default Sider;
