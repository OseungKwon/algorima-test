import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Box = styled.div`
  padding: 1rem;
  width: 10rem;
`;

const Items = styled.div`
  padding: 0.2rem;
  margin: 0.2rem;
  box-shadow: 1px 4px 4px 0 rgb(117 121 125 / 6%),
    0 1px 3px 0 rgb(113 117 121 / 20%);
`;

const DropBox = ({ droppableId, data }) => {
  return (
    <Droppable droppableId={droppableId}>
      {(provided) => (
        <Box
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={droppableId}
        >
          {data.map(({ id, name }, index) => {
            return (
              <Draggable key={id} draggableId={id} index={index}>
                {(provided) => (
                  <Items
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <div key={id}>{name}</div>
                  </Items>
                )}
              </Draggable>
            );
          })}
          {provided.placeholder}
        </Box>
      )}
    </Droppable>
  );
};

export default DropBox;
