import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div``;

const Box = styled.div`
  margin: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 2px solid red;
  border-radius: 6px;
  border: ${(props) => {
    const [curEl, dropBoxId] = [props.curEl, props.dropBoxId];
    if (props.isDraggingOver) {
      if (curEl.slice(0, curEl.length - 1) === dropBoxId.split("Box").join(""))
        return "2px dashed gray";
    } else return "1px solid black";
  }};
  box-sizing: border-box;
  padding: 4;
  width: 150;
  height: 200;
  background: ${(props) => (props.data.length ? "#fff" : "#ccc")};
`;

const XBtn = styled.div`
  cursor: pointer;
  position: absolute;
  transform: translateX(180px) translateY(50px);
`;

const DataBlock = ({ id, boxType, setResult, handleElement }) => {
  const { box, items, setBox, lists, setItems, curEl } = handleElement;
  const handleXBtn = () => {
    let type = `${id.split("Box").join("")}s`;
    setItems({ ...items, [type]: [...lists[type]] });

    setResult("");
    setBox({ ...box, [id]: "" });
  };

  return (
    <Container>
      {box[id] !== "" ? <XBtn onClick={handleXBtn}>×</XBtn> : <div></div>}
      <Droppable droppableId={id} key={id}>
        {(provided, snapshot) => {
          return (
            <Box
              data={box[id]}
              {...provided.droppableProps}
              ref={provided.innerRef}
              curEl={curEl}
              dropBoxId={provided.droppableProps["data-rbd-droppable-id"]}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {box[id] === "" ? boxType[id] : box[id]}
            </Box>
          );
        }}
      </Droppable>
    </Container>
  );
};

export default DataBlock;
