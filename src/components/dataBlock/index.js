import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Container, Box, XBtn } from "./style";

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
