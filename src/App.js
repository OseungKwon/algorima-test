import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import DataBlock from "./components/DataBlock";
import algorimaData from "./asset/algorimaData.json";
import Sider from "./components/Sider";
import Content from "./components/Content";
import Header from "./components/Header";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 80%;
  margin-top: 4rem;
  box-sizing: border-box;
`;

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

function App() {
  const lists = algorimaData;
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

  return (
    <div>
      <Header box={box} setResult={setResult} />
      <Container>
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, handleElement)}
          onDragStart={(startId) => onDragStart(startId, setCurEl)}
        >
          <Sider items={items} />
          <Content
            result={result}
            setResult={setResult}
            handleElement={handleElement}
          />
        </DragDropContext>
      </Container>
    </div>
  );
}

export default App;
