import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  height: 4rem;
  width: 100%;
  top: 0;
  border-bottom: 1px solid gray;
  background: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Button = styled.button`
  margin-right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 6px;
  width: 7rem;
  height: 2.5rem;
  background: #0078ff;
  color: #fff;
  border: none;
  &:disabled {
    cursor: default;
    background: #aaa;
  }
`;
