import styled from "styled-components";

export const Item = styled.div`
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

export const List = styled.div`
  margin: 5;
  padding: 4;
  width: 200;
  min-height: 200;
`;
