import styled from "styled-components";

export const KeyContainer= styled.div`
  flex-grow: 1;
  
  button {
    background-color: ${({ theme }) => theme.colors.key};
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    font-size: 20px;
    font-weight: 700;
    color:  ${({ theme }) => theme.colors.toggle_bg}
   
  }
`;


