import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Box = styled.div`
  margin: 20;
  border: 1px solid black;
  border: ${(props) => {
    if (props.isDraggingOver) {
      //console.log("props", props.curEl, props.dropBoxId);
      if (props.curEl === "datas") {
        if (props.dropBoxId === "dataBox") return "2px dashed gray";
        else return "1px solid red";
      } else {
        if (props.dropBoxId === "funcBox") return "2px dashed gray";
        else return "1px solid red";
      }
    }
  }};
  padding: 4;
  width: 150;
  height: 150;
`;

const XBtn = styled.div`
  cursor: pointer;
  position: relative;
  transform: translateX(10px) translateY(10px);
`;

const DataBlock = ({ id, handleElement }) => {
  const { box, items, setBox, lists, setItems, curEl } = handleElement;
  //console.log("b", box);
  const handleXBtn = () => {
    if (id === "dataBox") {
      setItems({ ...items, datas: [...lists.datas] });
    } else {
      setItems({ ...items, funcs: [...lists.funcs] });
    }
    setBox({ ...box, [id]: "" });
  };
  return (
    <>
      <XBtn
        onClick={() => {
          handleXBtn(id);
        }}
      >
        x
      </XBtn>

      <Droppable droppableId={id} key={id}>
        {(provided, snapshot) => {
          console.log("provied", provided, "snpa", snapshot);
          return (
            <Box
              {...provided.droppableProps}
              ref={provided.innerRef}
              curEl={curEl}
              dropBoxId={provided.droppableProps["data-rbd-droppable-id"]}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {box[id]}
              {provided.placeholder}
            </Box>
          );
        }}
      </Droppable>
    </>
  );
};

export default DataBlock;
