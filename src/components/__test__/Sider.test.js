import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Sider from "../sider/";

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

const items = {
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

describe("<Sider/>", () => {
  it("데이터 블록 리스트 확인", () => {
    render(<Sider items={items} />);
    screen.getByText("Data Blocks");
    screen.getByTestId("datas");
  });

  it("함수 블록 리스트 확인", () => {
    render(<Sider items={items} />);
    screen.getByText("Function Blocks");
    screen.getByTestId("funcs");
  });
});
