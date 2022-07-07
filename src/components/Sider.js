import React from "react";
import ListBlock from "./ListBlock";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height: 100%;
`;
const Title = styled.div`
  display: flex;

  font-size: 1rem;
`;

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
