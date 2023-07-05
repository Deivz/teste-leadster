import { styled } from "styled-components";
import { device } from "../global";

export const VideoCardContainer = styled.div`
  
  a{
      align-items: center;
      border-radius: 1rem;
      box-shadow: 0 10px 14px 6px rgba(0, 0, 0, 0.05);
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 2rem auto;
      max-width: 20rem;
      text-decoration: none;
      
      img{
        max-width: 20rem;
      }
      
      span{
        align-items: center;
        background-color: ${({ theme }) => theme["videocard-bg-color"]};
        border-radius: 1rem;
        display: flex;
        font-size: 1rem;
        font-weight: ${({ theme }) => theme["font-weight-extra-bold"]};
        height: 5rem;
        justify-content: center;
        width: 80%;
      }
  }


  @media ${device.tablet}{
    margin: 0 auto;
  }
`