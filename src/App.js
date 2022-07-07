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
const strToFunc = {
  toUpperCase: (str) => str.toUpperCase(),
  wordNum: (str) => str.split(" ").length,
  reverse: (str) => str.split("").reverse().join("")
};

const onDragStart = (startId, setCurEl) => {
  setCurEl(startId.source.droppableId);
};

const onDragEnd = (result, handleElement) => {
  const { box, items, setBox, lists, setItems, setCurEl } = handleElement;

  // destination없으면 end
  if (!result.destination) return;
  const { source, destination } = result;

  // srcId: 드래그 요소가 있던 블록 id
  // desId: 드래그가 끝났을 때 있던 블록 id
  const [srcId, desId] = [source.droppableId, destination.droppableId];
  let boxType = srcId === "datas" ? "dataBox" : "funcBox";
  let moveItem = items[srcId][source.index];

  if (srcId.slice(0, srcId.length - 1) === desId.split("Box").join("")) {
    setItems({
      ...items,
      [srcId]: lists[srcId].filter((el) => el.id !== moveItem.id)
    });
    setBox({
      ...box,
      [boxType]: moveItem.content
    });
  }
  setCurEl("");
};

const onResult = (box, setResult) => {
  const { dataBox, funcBox } = box;
  setResult(strToFunc[funcBox](dataBox));
};

function App() {
  const [items, setItems] = useState(lists);
  const [box, setBox] = useState({ dataBox: "", funcBox: "" });
  console.log(
    "box",
    box,
    Object.values(box).find((el) => el === "")
  );
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
        <div>
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
        </div>
      </DragDropContext>

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
}

export default App;
