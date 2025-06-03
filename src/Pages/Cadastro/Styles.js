import styled from 'styled-components';

export const Container = styled.div`
    background-color: #000;
    min-height : 100vh;
    display : flex;
    flex-direction :column;
`;

export const Header = styled.div`
    background-color: #ffdc00;
    height: 80px;
    display: flex;
    align-items: center;
    padding-left: 2rem;
`;

export const Logo = styled.div`
    color: black;
    font-size: 2rem;
    font-weight: bold;
`;

export const Form = styled.div`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    display: flex;
    align-items: center;
    padding: 2rem 1rem;
`;

export const Title = styled.h1`
    color: #ffdc00;
    margin-bottom: 2rem;
`;

export const InputField = styled.div`
    display: flex;
    gap: 1rem;
    max-width: 400px;
    flex-direction: column;
    width: 400px;
`;

export const Input = styled.input`
    padding: 1rem;
    border-radius: 25px;
    outline: none;
    border: none;
    font-size: 1rem;
`;

export const CadastroButton = styled.button`
    color: #333;
    background: none;
    font-size: 1rem;
    border: none;
    position: absolute;
    right: 16px;
    cursor: pointer;
`;

export const LoginText = styled.p`
    color: #fff;
    font-size: 0.9rem;
    margin-top: 1rem;
`;
