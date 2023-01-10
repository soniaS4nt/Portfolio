import styled from "styled-components";

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

