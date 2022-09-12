import styled from "styled-components";

export const AppContainer = styled.div`
  min-width: 375px;
  max-width: 1440px;
  height: 100vh;
  display: flex;
  align-items: center;  
  justify-content: center;
  font-family: 'League Spartan', sans-serif;
  font-weigth: 700;

  .calculator {
    display: flex;
    flex-direction: column;
    width: 400px;   
    place-items: center;
    height: auto;

  /*   @media (min-width: 375px) {
      width: 300px;
    } */
`;
