import { styled } from "styled-components";
import { device } from "../global";

export const FilterBarContainer = styled.div`
  border-bottom: .1rem solid ${({ theme }) => theme["border-section-color"]};
  align-items: center;
  display: flex;
  flex-direction: column;
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
      font-size: .75rem;
      justify-content: center;
      padding: .5rem;
    }

    li:hover{
      color: ${({theme}) => theme["color-blue-sky"]};
    }
  }

  .select{
    margin-top: 1rem;
    width: 16.25rem;
  }

  @media ${device.mobileL}{
    flex-direction: row;
    justify-content: space-between;

    ul{
      gap: .5rem;
      grid-template-columns: repeat(3, 1fr);
    }

    .select{
      margin-top: 0;
      width: 14.375rem;
    }
  }

  @media ${device.laptop}{
    ul{
      gap: .5rem;
      grid-template-columns: repeat(5, 1fr);

      li{
        font-size: .875rem;
      }
    }
  }
`