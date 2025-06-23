import styled from "styled-components";

export const ContainerHH = styled.div`
    background-color: #000;
    min-height : 100vh;
    display : flex;
    flex-direction :column;
    justify-content: center;
    align-items: center;
`;


export const Container = styled.div`
    background: #000;
    color: white;
    min-height: 100vh;
    padding: 20px;
    flex-direction :column;
    justify-content: center;
    align-items: center;
  
`;

export const CarouselField = styled.div`
  max-width: 600px;
  height:  400px ;
  margin: 0 auto 20px;
    background-color: aliceblue;
  .slide {
    background: white;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
  }

  .slick-prev,
  .slick-next {
    color: yellow;
    font-size: 24px;
    z-index: 2;
  }
`;

export const LRow = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 500px;
  margin: 0 auto 1rem auto; 
`;

export const Lbuton = styled.button`
  padding: 0.5rem 1.2rem;
  background-color: black;
  color: yellow;
  border-radius: 8px;
  border: 2px solid yellow;
  font-size: 1rem;
  cursor: pointer;
`;

export const Table = styled.table`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  border-collapse: collapse;
  text-align: center;
  border-radius: 6px;
  overflow: hidden;

  th {
    background: yellow;
    color: black;
    padding: 10px;
    font-size: 14px;
  }

  td {
    padding: 10px;
    background: #222;
    border-top: 1px solid #333;
    font-size: 14px;
  }

  tr:last-child td {
    border-bottom: none;
  }
`;