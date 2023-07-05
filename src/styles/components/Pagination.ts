import { styled } from "styled-components";

export const PaginationContainer = styled.div`
  align-items: center;
  display: flex;
  font-weight: ${({theme}) => theme["font-weight-extra-bold"]};
  margin: 1rem auto;
  width: 18.75rem;

    ul{
      display: flex;
      list-style: none;

      button{
        background-color: transparent;
        border: none;
        cursor: pointer;
        font-size: 1rem;
        font-weight: ${({theme}) => theme["font-weight-bold"]};
        margin: 0 .1rem;
        width: 1.5rem;
      }

      button:hover{
        border: solid .1rem ${({theme}) => theme["color-grayish-blue"]};
        border-radius: .2rem;
      }
    }
`