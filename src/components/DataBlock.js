import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Box = styled.div`
  margin: 20;
  border: 1px solid ${(props) => (props.isDraggingOver ? "red" : "black")};
  padding: 4;
  width: 150;
  height: 150;
`;

const DataBlock = ({ id, data }) => {
  return (
    <Droppable droppableId={id} key={id}>
      {(provided, snapshot) => {
        console.log("provied", provided, "snpa", snapshot);
        return (
          <Box
            {...provided.droppableProps}
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {data}
            {provided.placeholder}
          </Box>
        );
      }}
    </Droppable>
  );
};

export default DataBlock;
