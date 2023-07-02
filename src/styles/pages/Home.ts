import { styled } from "styled-components";
import { device } from "../global";

export const HomeContainer = styled.article`
  section{
    h3{
      font-size: 1rem;
      font-weight: ${({ theme }) => theme["font-weight-semi-bold"]};

    }
    
    strong{
      font-weight: ${({ theme }) => theme["font-weight-extra-bold"]};
    }
    
    h4{
      font-size: .6875rem;
      font-weight: ${({ theme }) => theme["font-weight-medium"]};
    }

    img {
      max-height: 21.25rem;
    }

    @media ${device.mobileL} {
      img {
        max-height: 100vh;
      }
    }

    @media ${device.laptop} {
      div{
        .container__info{
          width: 40vw;
        }
      }

      h3{
        font-size: 2rem;
      }

      h4{
        font-size: .875rem;
      }
    }

    @media ${device.desktop} {
      div{
        .container__info{
          width: 30vw;
        }
      }
    }
  }

  section:nth-child(1n){
    background-color: ${({ theme }) => theme["section-bg-color"]};
  }

  

`

export const TextContainer = styled.div`
  line-height: 1.3;
  padding-bottom: .75rem;
  width: 17.5rem;

  @media ${device.laptop}{
    width: 25rem;
  }
`

export const AppContainer = styled.div`
  border-top: .1rem solid ${({ theme }) => theme["border-section-color"]};

  div{
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding-top: .75rem;
    width: 20rem;
  
    img{
      width: 8.4rem;
    }
  }
`

export const InfosContainer = styled.div`
  div{
    align-items: center;
    display: flex;
    justify-content: space-between;
    line-height: 1.5;

    img{
      height: .75rem;
    }
  }

  .pipe {
    display: none;
  }
  
  .container__card{
    width: 13rem;
  }
  
  .container__rating{
    width: 13.5rem;
  }
  
  @media ${device.laptop}{
    align-items: center;
    display: flex;
    justify-content: space-between;
    max-width: 35.625rem;

    .pipe{
      display: inline;
      font-weight: ${({ theme }) => theme["font-weight-bold"]};
    }

    .container__card{
      width: 16rem;
    }
    
    .container__rating{
      width: 15.75rem;
    }
  }

`