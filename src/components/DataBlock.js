import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Box = styled.div`
  margin: 20;
  border: 1px solid red;
  border: ${(props) => {
    const [curEl, dropBoxId] = [props.curEl, props.dropBoxId];
    if (props.isDraggingOver) {
      if (curEl.slice(0, curEl.length - 1) === dropBoxId.split("Box").join(""))
        return "2px dashed gray";
    } else return "1px solid black";
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

const DataBlock = ({ id, setResult, handleElement }) => {
  const { box, items, setBox, lists, setItems, curEl } = handleElement;

  const handleXBtn = (id) => {
    let type = `${id.split("Box").join("")}s`;
    setItems({ ...items, [type]: [...lists[type]] });

    setResult("");
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
