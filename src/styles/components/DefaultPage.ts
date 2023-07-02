import { styled } from "styled-components";
import { device } from "../global";
import { css } from "styled-components";

export const DefaultPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
interface DivContainerProps {
  isLarge: boolean;
}

export const DivContainer = styled.div<DivContainerProps>`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  max-width: 90rem; 
  padding: 1.5rem 0;
  width: ${({theme}) => theme["container-width"]};

  @media ${device.tablet} {
    ${({isLarge}) => {
      return isLarge ? css`
        width: ${({theme}) => theme["container-width"]};
      `
      :
      css`
        width: ${({theme}) => theme["container-width-desktop"]};
      `
    }}
  }

  @media ${device.laptop} {
    justify-content: space-between;
  }
`