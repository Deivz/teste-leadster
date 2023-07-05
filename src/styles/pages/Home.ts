import { styled } from "styled-components";
import { device } from "../global";


export const HomeContainer = styled.article`
  section:nth-child(odd){
    background-color: ${({ theme }) => theme["section-bg-color"]};
  }
`

export const SloganContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 90rem; 
  padding: 1.5rem 0;
  width: ${({ theme }) => theme["container-width"]};
 
    .webinars{
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

    .slogan{
      padding: 1rem 0;
      position: relative;

      img{
        height: 1rem;
        position: absolute;
        right: -0.65rem;
        top: 1.5rem;
      }
    }

    h5{
      border-top: .1rem solid ${({ theme }) => theme["border-section-color"]};
      padding: 1rem 0;
    }

  @media ${device.laptop} {
    width: ${({ theme }) => theme["container-width-laptop"]};

      img{
        height: 1.5rem;
      }
  }

  @media ${device.desktop} {
    width: ${({ theme }) => theme["container-width-desktop"]};
  }
`

export const VideosContainer = styled.div`
  align-items: center;
  border-bottom: .1rem solid ${({ theme }) => theme["border-section-color"]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 90rem; 
  padding: 1.5rem 0;
  width: ${({ theme }) => theme["container-width"]};

    .videos{
      border-top: .1rem solid ${({ theme }) => theme["border-section-color"]};
      margin-top: 2rem;
    }

    @media ${device.tablet}{
      .videos{
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media ${device.laptop}{
      width: ${({ theme }) => theme["container-width-laptop"]};
      
      .videos{
        gap: 4rem;
        width: 100%;
      }
    }
    
    @media ${device.desktop}{
      width: ${({ theme }) => theme["container-width-desktop"]};
      .videos{
          gap: 2rem;
          grid-template-columns: repeat(3, 1fr);
          width: auto;
        }
    }
`

export const BenefitsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 90rem; 
  padding: 1.5rem 0;
  width: ${({ theme }) => theme["container-width"]};

    img {
      max-width: 90vw;
    }

    .info {
      .text {
        line-height: 1.3;
        padding-bottom: .75rem;
        width: 17.5rem;
      }

      .app {
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
      }

      .extra {
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
        
        .card{
          width: 13rem;
        }
        
        .rating{
          width: 13.5rem;
        }
      }
    }

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-between;

      img {
        max-width: 50vw;
      }

      .info {
        max-width: 40vw;
        width: 90%;

        .text{
          width: 23rem;
        }

        .extra {
          align-items: center;
          display:flex;
          justify-content: space-between;
          
            .pipe{
              display: inline;
              font-weight: ${({ theme }) => theme["font-weight-bold"]};
            }
    
            .card{
              width: 16rem;
            }
            
            .rating{
              width: 15.75rem;
            }
        }
      }
  }
`