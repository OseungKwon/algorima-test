import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const datas = [
  { id: "a1", content: "First task1" },
  { id: "a2", content: "222Second task" },
  { id: "a3", content: "Third task" },
  { id: "a4", content: "Fourth task" },
  { id: "a5", content: "Fifth task" }
];

const onDragEnd = (result) => {
  // id에따라 drop 가능하도록
};

function App() {
  const [dataList, setDataList] = useState(datas);
  const [data, setData] = useState("hihi");
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <DragDropContext
        onDragEnd={(result) =>
          onDragEnd(result, dataList, setDataList, setData)
        }
      >
        <Droppable droppableId={"1"} key={"1"}>
          {(provided, snapshot) => {
            console.log("!provied", provided, "1snpa", snapshot);
            return (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {dataList.map((item, index) => {
                  return (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => {
                        return (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {item.content}
                          </div>
                        );
                      }}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
