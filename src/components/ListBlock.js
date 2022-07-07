import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Item = styled.div`
  user-select: "none";
  padding: 5;
  margin: 1rem;
  //background-color: ${(props) => (props.isDragging ? "white" : "green")};
  background: #fff;
  box-shadow: 1px 10px 3px 0 rgb(117 121 125 / 5%),
    0 1px 3px 0 rgb(113 117 121 / 20%);
  border-radius: 5px;
  display: flex;
  justify-content: center;
`;

const List = styled.div`
  margin: 5;
  padding: 4;
  width: 200;
  min-height: 200;
`;

const ListBlock = ({ id, list }) => {
  return (
    <Droppable droppableId={id} key={id}>
      {(provided, snapshot) => {
        //console.log("!provied", provided, "1snpa", snapshot);
        return (
          <List
            {...provided.droppableProps}
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {list.map((item, index) => {
              return (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => {
                    return (
                      <Item
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        isDragging={snapshot.isDragging}
                      >
                        {item.content}
                      </Item>
                    );
                  }}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </List>
        );
      }}
    </Droppable>
  );
};

export default ListBlock;
