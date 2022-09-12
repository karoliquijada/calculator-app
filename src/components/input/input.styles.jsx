import styled from "styled-components";

export const InputContainer = styled.div`
  .input {
    color: ${({ theme }) => theme.colors.text1};
    width: 100%;
    border-radius: 10px;
    border: none;
    background-color: ${({ theme }) => theme.colors.screen_bg};
    font-family: Arial, Helvetica, sans-serif;
    font-size: 30px;
    text-align: right;
    padding: 25px;
  }

  .input:focus {
    outline: none;
  }
`;
