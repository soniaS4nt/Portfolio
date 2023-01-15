import styled from "styled-components";
import {Container} from '@chakra-ui/react'

export const CustomContainer = styled(Container)`
    display: flex;
    justify-items: center;
    min-height: 100vh;
    gap: 1rem;
   `;

export const Title = styled.h1`
    background: linear-gradient(to right, #833ab4, #fd1d1d, #fcb045);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 4rem;
    font-weight: 900;
    text-align: center;
  

@media (max-width: 800px) {
    font-size: 3rem;
}
`



