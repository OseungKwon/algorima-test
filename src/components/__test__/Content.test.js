import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Content from "../content/";

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

const mockRender = (
  result,
  box = { dataBox: "", funcBox: "" },
  curEl = "datas"
) => {
  render(
    <Content result={result} box={box} curEl={curEl} handleXBtn={jest.fn()} />
  );
};

describe("<Content/>", () => {
  it("result값 확인", () => {
    mockRender("MAKE AI WORK FOR THE REST OF US", {
      dataBox: "Make AI work for the rest of us",
      funcBox: "toUpperCase"
    });
    const result = screen.getByTestId("result").textContent;
    expect(result).toBe("MAKE AI WORK FOR THE REST OF US");
  });

  it("result가 비어있을 때", () => {
    mockRender("", {
      dataBox: "Make AI work for the rest of us",
      funcBox: "toUpperCase"
    });
    const result = screen.getByTestId("result").textContent;
    expect(result).toBe("결과 슬롯");
  });
});
