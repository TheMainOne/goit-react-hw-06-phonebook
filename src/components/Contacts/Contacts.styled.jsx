import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 350px;
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background: #a4b9d8;
  width: 80px;
  height: 40px;
  font-family: cursive;
  font-weight: bold;
  color: #545252;
`;

export const Notification = styled.p`
  text-align: center;
`;
