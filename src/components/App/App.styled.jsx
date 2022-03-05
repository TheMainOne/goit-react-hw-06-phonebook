import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: #e5e5e7;
    font-size: 20px;
    font-family: cursive;
  }
`;

export const Wrapper = styled.div`
  width: 600px;
  margin: 0 auto;
  padding: 25px;
  border: 3px solid cadetblue;
  border-radius: 7px;
  background: whitesmoke;
`;
