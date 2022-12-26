import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 500;
    margin-top: 50px;
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
`;

export const Text = styled.p`
    margin: 0;
    padding: 0;
`;

export const Link = styled.a`
    text-decoration: none;
    font-weight: 700;
    transition: 0.3s;

    &:hover {
        color: #f00;
    }
`;

export const Icon = styled.img`
    width: 30px;
    height: 30px;
    margin: 0 10px;
`;

export const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`;

export const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`;


