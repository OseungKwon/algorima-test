import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import DataBlock from "./components/DataBlock";
import ListBlock from "./components/ListBlock";

const datas = [
  { id: "d1", content: "모두를 위한 AI" },
  { id: "d2", content: "Smarter alone, Smartest together" },
  { id: "d3", content: "Make AI work for the rest of us" }
];

const funcs = [
  { id: "f1", content: "toUpperCase" },
  { id: "f2", content: "wordNum" },
  { id: "f3", content: "reverse" }
];

const onDragEnd = (result, dataList, setDataList, setData) => {
  // id에따라 drop 가능하도록
  if (!result.destination) return;
  const { source, destination } = result;
  console.log("p", source, destination);

  if (source.droppableId !== destination.droppableId) {
    let copiedItems = [...dataList];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems = copiedItems.filter((el) => el.id !== source.index);

    setDataList(copiedItems);
    setData(removed.content);
  }
};

function App() {
  const [dataList, setDataList] = useState(datas);
  const [funcList, setFuncList] = useState(funcs);
  const [data, setData] = useState("");
  const [func, setFuncs] = useState("");
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <DragDropContext
        onDragEnd={(result) =>
          onDragEnd(result, dataList, setDataList, setData)
        }
      >
        <div>
          <ListBlock id="list1" list={dataList} />
        </div>
        <div
          style={{
            margin: 20,
            display: "flex",
            justifyContent: "center",
            height: "100%"
          }}
        >
          <DataBlock
            id="dataBlock"
            data={data}
            setData={setData}
            datas={datas}
            setDataList={setDataList}
          />
        </div>
      </DragDropContext>
    </div>
  );
}

export default App;
