import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ListBlock from "../listBlock/";

jest.mock("react-beautiful-dnd", () => ({
  Droppable: ({ children }) =>
    children(
      {
        draggableProps: {
          style: {}
        },
        innerRef: jest.fn(),
        droppableProps: {
          ["data-rbd-droppable-id"]: "dataBox"
        }
      },
      {
        isDraggingOver: true
      }
    ),
  Draggable: ({ children }) =>
    children(
      {
        draggableProps: {
          style: {}
        },
        innerRef: jest.fn(),
        dragHandleProps: {}
      },
      { isDragging: true }
    ),
  DragDropContext: ({ children }) => children
}));

const lists = {
  datas: [
    { id: "d1", content: "모두를 위한 AI" },
    { id: "d2", content: "Smarter alone, Smartest together" },
    { id: "d3", content: "Make AI work for the rest of us" }
  ],
  funcs: [
    { id: "f1", content: "toUpperCase" },
    { id: "f2", content: "wordNum" },
    { id: "f3", content: "reverse" }
  ]
};

const mockRender = (id) => {
  render(<ListBlock id={id} list={lists[id]} />);
};

describe("<ListBlock/>", () => {
  it("데이터 슬롯 확인", () => {
    mockRender("datas");
    lists.datas.forEach((el) => {
      screen.getByText(el.content);
    });
  });

  it("함수 슬롯 확인", () => {
    mockRender("funcs");
    lists.funcs.forEach((el) => {
      screen.getByText(el.content);
    });
  });
});
