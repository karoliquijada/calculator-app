import styled from "styled-components";

export const KeyContainer= styled.div`
  grid-column: ${props => props.column ? "span 2" : ""};

  button {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.key};
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    font-size: ${props => props.size ? "20px" : "32px"};
    font-weight: 700;
    color:  ${({ theme }) => theme.colors.toggle_bg};
    border-bottom: 4px solid ${({ theme }) => theme.colors.key_shadow}; 
  }

  button:hover {
    background-color: #fff;
  }



`;


