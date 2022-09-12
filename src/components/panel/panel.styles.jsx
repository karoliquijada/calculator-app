import styled from "styled-components";

export const KeysContainer = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 10px;
  justify-items: stretch;
  width: 100%;
  height: auto;
  padding: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.toggle_bg};
`;
