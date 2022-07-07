import React from "react";
import { Container, Button } from "./style";

const strToFunc = {
  toUpperCase: (str) => str.toUpperCase(),
  wordNum: (str) => str.split(" ").length,
  reverse: (str) => str.split("").reverse().join("")
};

const onResult = (box, setResult, strToFunc) => {
  const { dataBox, funcBox } = box;
  setResult(String(strToFunc[funcBox](dataBox)));
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
