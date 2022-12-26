import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    bottom: 0;
    background-color: #000;
    color: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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


