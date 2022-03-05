import styled from "styled-components";

export const Input = styled.input`
  margin: 0 auto;
  display: block;
  width: 235px;
  padding: 10px;
  border: 2px solid #a6a6a6;
  border-radius: 4px;

  &:hover,
  &:focus {
    border: 2px solid #89b4d8;
  }

  &::placeholder {
    font-family: cursive;
  }
`;
