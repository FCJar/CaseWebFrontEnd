import styled from "styled-components";
import { Link } from "react-router-dom"; 

export const H3 = styled.h3`
    background-color: #ffdc00;
    height: 80px;
    display: flex;
    gap: 48px;
    align-items: center;
    padding-left: 2rem;
`;

export const LogoButton = styled.button`
    color: #333;
    background: #ffdc00;
    font-size: 100%;
    border: none;
    padding: 0.5rem 1rem;

    //right: 16px;
    cursor: pointer;
`;

export const LogoImg = styled.img`
    height: 50px;
    cursor: pointer;

`;

export const HLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-weight: 500;

    &:hover{
        color: black;
    }
`;