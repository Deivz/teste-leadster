import { styled } from "styled-components";
import { device } from "../global";

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme["body-bg-color"]};

  nav{
    display: flex;
    flex-direction: column;
    padding: 1.4rem 0;

    ul{
      list-style: none;
      padding-top: 1rem;

      h4{
        padding-bottom: .5rem;
      }

      li{
        color: ${({ theme }) => theme["font-color-footer"]};
        cursor: pointer;
        font-size: 0.75rem;
        padding-top: .3rem;
      }
    }
  }

  @media ${device.mobileL} {
    nav{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
  }

  @media ${device.tablet} {
    nav{
      grid-template-columns: repeat(4, 1fr);
      width: 100%;
    }
  }

  @media ${device.desktop} {
    nav{
      gap: 5em;
    }
  }
`

export const DivContainerFooter = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  max-width: 90rem; 
  padding: 1.5rem 0;
  width: ${({ theme }) => theme["container-width"]};
  
  @media ${device.laptop} {
    justify-content: space-between;
    width: ${({ theme }) => theme["container-width-laptop"]};
  }

  @media ${device.desktop} {
    width: ${({ theme }) => theme["container-width-desktop"]};
  }
`

export const SocialIconsContainer = styled.li`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  width: 8rem;

  span{
    align-items: center;
    background-color: ${({ theme }) => theme["border-footer-color"]};
    border-radius: 50%;
    display: flex;
    font-size: .875rem;
    height: 2.5rem;
    justify-content: center;
    width: 2.5rem
  }
`

export const FooterLastDiv = styled.div`
  align-items: center;
  border-top: .1rem solid ${({ theme }) => theme["border-footer-color"]};
  display: flex;
  font-size: .65rem;
  height: 5rem;

  
  div{
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 90rem; 
    width: ${({theme}) => theme["container-width"]};

    span{
      color: ${({ theme }) => theme["font-color-footer"]};
      text-align: center;
    }

  }

  @media ${device.laptop} {
    div{
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: ${({theme}) => theme["container-width-desktop"]};
    }
  }
`