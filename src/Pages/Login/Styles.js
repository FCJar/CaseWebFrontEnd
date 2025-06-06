import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    background-color: #000;
    min-height : 100vh;
    display : flex;
    flex-direction :column;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form`
    display: flex;
    gap: 1rem;
    max-width: 400px;
    flex-direction: column;
    width: 100%;
    padding: 2rem;
`;

export const Title = styled.h1`
    color: #ffdc00;
    margin-bottom: 2rem;
`;


export const Input = styled.input`
    padding: 1rem;
    border-radius: 25px;
    outline: none;
    border: none;
    font-size: 1rem;
`;

export const MainButton = styled.button`
    color: #333;
    background: #ffdc00;
    font-size: 1rem;
    border: none;
    padding: 1rem;
    margin-top: 1rem;
    width: 100%;
    max-width: 400px;
    //right: 16px;
    cursor: pointer;
`;

export const CadastroText =  styled(Link)`
    color: #fff;
    margin-left: 0.5rem;
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
    &:hover{
        color: #ffc400;
    }
`;

export const TextField = styled.p`
    color: #fff;
    font-size: 1rem;
`;
