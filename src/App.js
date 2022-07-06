import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import DataBlock from "./components/DataBlock";
import ListBlock from "./components/ListBlock";

const lists = {
  datas: [
    { id: "d1", content: "모두를 위한 AI" },
    { id: "d2", content: "Smarter alone, Smartest together" },
    { id: "d3", content: "Make AI work for the rest of us" }
  ],
  funcs: [
    { id: "f1", content: "toUpperCase" },
    { id: "f2", content: "wordNum" },
    { id: "f3", content: "reverse" }
  ]
};

const onDragStart = (startId, setCurEl) => {
  setCurEl(startId.source.droppableId);
};

const onDragEnd = (result, handleElement) => {
  const { box, items, setBox, lists, setItems, setCurEl } = handleElement;

  // id에따라 drop 가능하도록
  if (!result.destination) return;
  const { source, destination } = result;
  const [srcId, desId] = [source.droppableId, destination.droppableId];
  let boxType = srcId === "datas" ? "dataBox" : "funcBox";
  //console.log(source, destination);

  if (
    (srcId === "datas" && desId === "dataBox") ||
    (srcId === "funcs" && desId === "funcBox")
  ) {
    setItems({
      ...items,
      [srcId]: lists[srcId].filter((_, i) => i !== source.index)
    });
    setBox({
      ...box,
      [boxType]: lists[srcId].filter((_, i) => i === source.index)[0].content
    });
  }
  setCurEl("");
};

const onResult = (box, setResult) => {
  const { dataBox, funcBox } = box;
  if (funcBox === "toUpperCase") {
    setResult(dataBox.toUpperCase());
    console.log(dataBox.toUpperCase());
  } else if (funcBox === "reverse") {
    setResult(dataBox.split("").reverse().join(""));
  } else if (funcBox === "wordNum") {
    setResult(dataBox.split(" ").length);
  }
};

function App() {
  const [items, setItems] = useState(lists);
  const [box, setBox] = useState({ dataBox: "", funcBox: "" });
  const [curEl, setCurEl] = useState("");
  const [result, setResult] = useState("");

  const handleElement = {
    items: items,
    setItems: setItems,
    box: box,
    setBox: setBox,
    curEl: curEl,
    setCurEl: setCurEl,
    lists: lists
  };

  console.log("result", result);
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, handleElement)}
        onDragStart={(startId) => onDragStart(startId, setCurEl)}
      >
        <div>
          <ListBlock id="datas" list={items.datas} />
          <ListBlock id="funcs" list={items.funcs} />
        </div>
        <div
          style={{
            margin: 20,
            display: "flex",
            justifyContent: "center",
            height: "100%"
          }}
        >
          <DataBlock id="dataBox" handleElement={handleElement} />
          <DataBlock id="funcBox" handleElement={handleElement} />
        </div>
      </DragDropContext>
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
  );
}

export default App;
