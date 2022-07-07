import React from "react";
import DataBlock from "./DataBlock";

const strToFunc = {
  toUpperCase: (str) => str.toUpperCase(),
  wordNum: (str) => str.split(" ").length,
  reverse: (str) => str.split("").reverse().join("")
};

const onResult = (box, setResult) => {
  const { dataBox, funcBox } = box;
  setResult(strToFunc[funcBox](dataBox));
};

const Content = ({ result, setResult, handleElement }) => {
  const { box } = handleElement;

  return (
    <div style={{ display: "flex", flex: 10 }}>
      <DataBlock
        id="dataBox"
        setResult={setResult}
        handleElement={handleElement}
      />
      <DataBlock
        id="funcBox"
        setResult={setResult}
        handleElement={handleElement}
      />
      {Object.values(box).find((el) => el === "") === undefined ? (
        <div>
          <button
            style={{ height: 50 }}
            onClick={() => {
              onResult(box, setResult);
            }}
          >
            확인
          </button>
          <div>{result}</div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Content;
