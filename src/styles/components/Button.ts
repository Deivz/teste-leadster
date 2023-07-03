import { styled } from "styled-components";

interface ButtonProps {
  height: number;
  width: number;
}

export const ButtonContainer = styled.button<ButtonProps>`
  background-color: ${({theme}) => theme["color-blue-sky"]};
  border: none;
  border-radius: 2rem;
  color: white;
  cursor: pointer;
  font-size: .75rem;
  font-weight: 600;
  height: ${({height}) => `${height}rem`};
  width: ${({width}) => `${width}rem`};
`