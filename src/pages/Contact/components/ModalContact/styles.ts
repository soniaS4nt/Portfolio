import styled from "styled-components";


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%; 
    
    input:valid {
    border-color: green;
    }
    input:invalid {
    border-color: red;
    }
    `;

export const Input = styled.input`
    width: 100%;
    height: 50px;
    margin: 10px 0;
    padding: 0 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: transparent;

    `;

export const TextArea = styled.textarea`
    width: 100%;
    height: 100px;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: transparent;
    `;

export const Button = styled.button`
    height: 50px;
    margin: 10px 0;
    padding:10px 30px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
    opacity: .6;
    }
    `;

export const Label = styled.label`
    width: 100%;
    font-size: small;
    `;