import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  height: 4rem;
  width: 100%;
  top: 0;
  border-bottom: 1px solid gray;
  background: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Button = styled.button`
  margin-right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 6px;
  width: 7rem;
  height: 2.5rem;
  background: #0078ff;
  color: #fff;
  border: none;
  &:disabled {
    cursor: default;
    background: #aaa;
  }
`;

const strToFunc = {
  toUpperCase: (str) => str.toUpperCase(),
  wordNum: (str) => str.split(" ").length,
  reverse: (str) => str.split("").reverse().join("")
};

const onResult = (box, setResult, strToFunc) => {
  const { dataBox, funcBox } = box;
  setResult(strToFunc[funcBox](dataBox));
};

const Header = ({ box, setResult }) => {
  return (
    <Container>
      <Button
        disabled={Object.values(box).find((el) => el === "") !== undefined}
        onClick={() => {
          onResult(box, setResult, strToFunc);
        }}
      >
        실행하기
      </Button>
    </Container>
  );
};

export default Header;
