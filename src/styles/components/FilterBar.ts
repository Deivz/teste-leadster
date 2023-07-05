import { styled } from "styled-components";
import { device } from "../global";

export const FilterBarContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: .75rem;
  font-weight: ${({theme}) => theme["font-weight-bold"]};
  justify-content: center;
  margin: 1rem 0;
  padding-bottom: 2rem;
  width: 100%;

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
      padding: .25rem .5rem;
    }

    li:hover{
      color: ${({ theme }) => theme["color-blue-sky"]};
    }
  }

  .order{
    margin-top: 1rem;
  }

  .select{
    padding-top: .5rem;
    width: 15.625rem;
    
    div {
      border-color: ${({ theme }) => theme["color-grayish-blue"]};
      border-radius: .5rem;
      color: ${({ theme }) => theme["color-grayish-blue"]};
    }
  }

  @media ${device.mobileL}{
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-between;

    ul{
      gap: .5rem;
      grid-template-columns: repeat(3, 1fr);
    }

    .order{
      margin-top: 0;
    }

    .select{
      margin-top: 0;
      width: 14.375rem;
    }
  }

  @media ${device.laptop}{
    ul{
      gap: .5rem;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr) );
      width: 65%;

      li{
        font-size: .875rem;
      }
    }
    
    .order{
      align-items: center;
      display: flex;
      justify-content: space-between;
      width: 20rem;
    }

    .select{
      padding-top: 0;
    }
  }

  @media ${device.desktop}{
    align-items: center;

    /* ul{
      grid-template-columns: repeat(5, 1fr);
    } */
  }
`