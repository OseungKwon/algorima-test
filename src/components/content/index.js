import React from "react";
import DataBlock from "../dataBlock";
import { Container, Box, Line } from "./style";

const boxType = {
  dataBox: "데이터 슬롯",
  funcBox: "함수 슬롯",
  resultBox: "결과 슬롯"
};

const Content = ({ result, box, curEl, handleXBtn }) => {
  return (
    <Container>
      <DataBlock
        id="dataBox"
        box={box}
        curEl={curEl}
        boxType={boxType}
        handleXBtn={handleXBtn}
      />
      <DataBlock
        id="funcBox"
        box={box}
        curEl={curEl}
        boxType={boxType}
        handleXBtn={handleXBtn}
      />
      <Box data={result} data-testid='result'>
        <div>{result !== "" ? result : boxType.resultBox}</div>
      </Box>
      <Line></Line>
    </Container>
  );
};

export default Content;
