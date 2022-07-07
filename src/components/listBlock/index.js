import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { Item, List } from "./style";

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
