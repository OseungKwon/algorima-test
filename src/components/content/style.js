import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  margin: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid black;
  border-radius: 6px;
  box-sizing: border-box;
  padding: 4;
  width: 150;
  height: 200;
  background: ${(props) => (props.data.length ? "#fff" : "#ccc")};
`;
