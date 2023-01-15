import styled from "styled-components";
import {Card} from "@chakra-ui/react";


export const ContainerGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1rem;
`

export const ContainerRepo = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
`

export const Image = styled.img`
width: 1.8rem;
margin:  1rem 0;

&:hover {
    cursor: pointer;
    opacity: 0.3;
}
`

export const CardCustom = styled(Card)`
    display: flex;
    flex-direction: column;
    margin: 1rem;

`
