import React from "react";
import DataBlock from "../dataBlock";
import { Container, Box, Line } from "./style";

const boxType = {
  dataBox: "데이터 슬롯",
  funcBox: "함수 슬롯",
  resultBox: "결과 슬롯"
};

const Content = ({ result, setResult, handleElement }) => {
  return (
    <Container>
      <DataBlock
        id="dataBox"
        boxType={boxType}
        setResult={setResult}
        handleElement={handleElement}
      />
      <DataBlock
        id="funcBox"
        boxType={boxType}
        setResult={setResult}
        handleElement={handleElement}
      />
      <Box data={result}>
        <div>{result !== "" ? result : boxType.resultBox}</div>
      </Box>
      <Line></Line>
    </Container>
  );
};

export default Content;
