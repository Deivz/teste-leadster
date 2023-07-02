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
        font-size: 0.75rem;
        padding-top: .3rem;
      }
    }
  }

  @media ${device.mobileL} {
    nav{
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;

      ul{
        width: 40%;
      }
    }
  }

  @media ${device.tablet} {
    nav{

      ul{
        width: auto;
      }
    }
  }
`

export const SocialIconsContainer = styled.li`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 8rem;

  span{
    background-color: ${({ theme }) => theme["border-footer-color"]};
    border-radius: 50%;
    padding: .5rem;
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
    width: 80%;

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
    }
  }
`