import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: end;
  width: 600px;
  margin: 0 auto;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 39px;
  padding: 5px 10px;
  cursor: pointer;
  background: #a4b9d8;
  border-radius: 4px;
  border: none;
  font-family: cursive;
  font-weight: bold;
  color: #545252;
`;

export const Input = styled.input`
  padding: 10px;
  border: 2px solid #a6a6a6;
  border-radius: 4px;

  &:hover,
  &:focus {
    border: 2px solid #89b4d8;
  }
`;

export const Label = styled.label`
  width: 200px;
`;
