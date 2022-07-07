import styled from "styled-components";

export const Container = styled.div``;

export const Box = styled.div`
  margin: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 2px solid red;
  border-radius: 6px;
  border: ${(props) => {
    const [curEl, dropBoxId] = [props.curEl, props.dropBoxId];
    if (props.isDraggingOver) {
      if (curEl.slice(0, curEl.length - 1) === dropBoxId.split("Box").join(""))
        return "2px dashed gray";
    } else return "1px solid black";
  }};
  box-sizing: border-box;
  padding: 4;
  width: 150;
  height: 200;
  background: ${(props) => (props.data.length ? "#fff" : "#ccc")};
`;

export const XBtn = styled.div`
  cursor: pointer;
  position: absolute;
  transform: translateX(180px) translateY(50px);
`;
