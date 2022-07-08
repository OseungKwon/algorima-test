import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Container, Box, XBtn } from "./style";

const DataBlock = ({ id, box, curEl, boxType, handleXBtn }) => {
  return (
    <Container>
      {box[id] !== "" ? <XBtn onClick={()=>{handleXBtn(id)}}>×</XBtn> : <div></div>}
      <Droppable droppableId={id} key={id}>
        {(provided, snapshot) => {
          return (
            <Box
              data-testid={id}
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
