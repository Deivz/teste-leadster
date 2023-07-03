import { styled } from "styled-components";
import { device } from "../global";

export const NavBarContainer = styled.div`

  ul{
    display: grid;
    gap: .5rem;
    grid-template-columns: repeat(2, 1fr);
    list-style: none;

    li{
      align-items: center;
      border: solid .1rem;
      border-radius: 2rem;
      cursor: pointer;
      display: flex;
      justify-content: center;
      padding: .5rem;
    }

    li:hover{
      color: ${({theme}) => theme["color-blue-sky"]};
    }
  }

  @media ${device.mobileL}{
    ul{
      gap: .5rem;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media ${device.laptop}{
    ul{
      gap: .5rem;
      grid-template-columns: repeat(5, 1fr);
    }
  }
`