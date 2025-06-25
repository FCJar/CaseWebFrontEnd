import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  align-items: center;
  justify-content: center;
  display: flex;  
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  position: relative;
  text-align: center;
  padding: 2rem;
  width: 90%;
  max-width: 400px;
  border-radius: 20px;
  background-color: white;
  font-family: 'Arial';
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.2);
`;

export const Closepage = styled.button`
  position: absolute;
  cursor: pointer;
  background: none;
  border: none;   
  font-weight: bold;  
  color: #000;  
  top: 12px;
  right: 16px;
  font-size: 2rem;
`;