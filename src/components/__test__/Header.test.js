import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../header/";

describe("start", () => {
  it("제출 버튼 확인", () => {
    render(<Header box={{ dataBox: "", funcBox: "" }} setResult={jest.fn()} />);
    screen.getByRole("button", { name: "실행하기" });
  });
  it("슬롯 비어있으면 disabled", () => {
    render(<Header box={{ dataBox: "", funcBox: "" }} setResult={jest.fn()} />);
    const buttonElement = screen.getByRole("button", { name: "실행하기" });
    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveAttribute("disabled");
  });
  it("모든 슬롯이 차있으면 not disabled", () => {
    render(
      <Header
        box={{ dataBox: "hi", funcBox: "toUpperCase" }}
        setResult={jest.fn()}
      />
    );
    const buttonElement = screen.getByRole("button", { name: "실행하기" });
    fireEvent.click(buttonElement);
    expect(buttonElement).not.toHaveAttribute("disabled");
  });
});
