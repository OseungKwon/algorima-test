import React from "react";
import DataBlock from "./DataBlock";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  margin: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid black;
  border-radius: 6px;
  box-sizing: border-box;
  padding: 4;
  width: 150;
  height: 200;
  background: ${(props) => (props.data.length ? "#fff" : "#ccc")};
`;

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
    </Container>
  );
};

export default Content;
