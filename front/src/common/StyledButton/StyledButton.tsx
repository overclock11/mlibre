import styled from 'styled-components';
import React from "react";
interface IStyledButton {
    text: string;
}
const StyledButtonBase = styled.button<IStyledButton>`
  border: 0;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  display: block;
  cursor: pointer;
  background-color: black;
  color: white;
`;
const StyledButtonAddToCar  = styled(StyledButtonBase)<IStyledButton>`
  background-color: ${props => props.text};
  color: white;
`;
export {
    StyledButtonBase,
    StyledButtonAddToCar
}
