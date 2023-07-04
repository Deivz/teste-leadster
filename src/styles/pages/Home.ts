import { styled } from "styled-components";
import { device } from "../global";

export const HomeContainer = styled.article`
  section{
    .container__image {
      max-height: 21.25rem;
    }

    @media ${device.mobileL} {
      .container__image {
        max-height: 100vh;
      }
    }

    @media ${device.laptop} {
      .container__image {
        max-height: initial;
        max-width: 50vw;
      }
    }

    .container__conversion {
      display: flex;
      flex-direction: column;

      .container__webinars{
        border: solid .125rem ${({ theme }) => theme["color-blue-sky"]};
        border-radius: 2rem 2rem 2rem .2rem;
        margin-bottom: 1rem;
        padding: .5rem;

        h4{
          color: ${({ theme }) => theme["color-blue-sky"]};
          font-size: .6875rem;
          font-weight: ${({ theme }) => theme["font-weight-bold"]};
        }
      }

      h5{
        border-top: .1rem solid ${({ theme }) => theme["border-section-color"]};
        padding: 1rem 0;
      }
    }

    @media ${device.laptop} {
      div{
        .container__info{
          width: 40vw;
        }
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

  section:nth-child(odd){
    background-color: ${({ theme }) => theme["section-bg-color"]};
  }
`

export const SloganContainer = styled.div`
  padding: 1rem 0;
  position: relative;

  img{
    height: 1rem;
    position: absolute;
    right: -0.65rem;
    top: 1.5rem;
  }

  @media ${device.laptop} {
    img{
      height: 1.5rem;
    }
  }
`

export const VideoContainer = styled.div`
  /* width: 100%; */
  margin-top: 2rem;

  @media ${device.tablet}{
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.laptop}{
    gap: 4rem;
    width: 100%;
  }

  @media ${device.desktop}{
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
    width: auto;
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