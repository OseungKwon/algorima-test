import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import DataBlock from "../dataBlock/";

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
        innerRef: jest.fn()
      },
      {}
    ),
  DragDropContext: ({ children }) => children
}));

const mockRender = (id, data, curEl = "datas") => {
  const boxType = {
    dataBox: "데이터 슬롯",
    funcBox: "함수 슬롯",
    resultBox: "결과 슬롯"
  };

  const box = { dataBox: "", funcBox: "" };
  box[id] = data;
  const handleXBtn = jest.fn();
  render(
    <DataBlock
      id={id}
      box={box}
      curEl={curEl}
      boxType={boxType}
      handleXBtn={handleXBtn}
    />
  );
};

describe("<DataBlock/>", () => {
  it("데이터 슬롯 확인", () => {
    mockRender("dataBox", "");
    screen.getByTestId("dataBox");
  });
  it("함수 슬롯 확인", () => {
    mockRender("funcBox", "");
    screen.getByTestId("funcBox");
  });

  it("데이터 슬롯에 아무것도 없을 떄", () => {
    mockRender("dataBox", "");
    expect(screen.getByTestId("dataBox").textContent).toBe("데이터 슬롯");
  });
  it("데이터 슬롯에 데이터 있을 때", () => {
    mockRender("dataBox", "mockData");
    expect(screen.getByTestId("dataBox").textContent).toBe("mockData");
  });

  it("함수 슬롯에 아무것도 없을 떄", () => {
    mockRender("funcBox", "");
    expect(screen.getByTestId("funcBox").textContent).toBe("함수 슬롯");
  });
  it("함수 슬롯에 데이터 있을 때", () => {
    mockRender("funcBox", "mockData");
    expect(screen.getByTestId("funcBox").textContent).toBe("mockData");
  });

  it("데이터 블록은 데이터 슬롯으로만(테두리 dashed gray line)", () => {
    mockRender("dataBox", "");
    expect(screen.getByTestId("dataBox")).toHaveStyle(
      "border: 2px dashed gray"
    );
  });

  it("데이터 블록은 데이터 슬롯으로만(테두리 solid red line)", () => {
    mockRender("dataBox", "", "funcs");
    expect(screen.getByTestId("dataBox")).toHaveStyle("border: 2px solid red");
  });

  it("데이터 있으면 x버튼 보임", () => {
    mockRender("dataBox", "123");
    expect(screen.getByTestId("xBtn").textContent).toBe("×");
  });

  it("데이터 없으면 x버튼도 안보임", () => {
    mockRender("dataBox", "");
    expect(screen.getByTestId("xBtn").textContent).toBe("");
  });
});
