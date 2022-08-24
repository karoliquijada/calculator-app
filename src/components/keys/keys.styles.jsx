import styled from "styled-components";

export const KeysContainer= styled.div`
  .container {
    padding: 10px;
    display: flex;
    width: 300px;
    flex-wrap: wrap;
    gap: 10px;
    background-color: ${({ theme }) => theme.colors.screen_bg};
  }
`;


