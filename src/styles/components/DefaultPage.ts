import { styled } from "styled-components";
import { device } from "../global";

export const DefaultPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const DivContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  max-width: 90rem; 
  padding: 1.5rem 0;
  width: ${({theme}) => theme["container-width"]};

  @media ${device.tablet} {
    width: ${({theme}) => theme["container-width-large"]};
  }
`