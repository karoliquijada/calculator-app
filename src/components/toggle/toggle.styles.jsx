import styled from "styled-components";

export const ToggleContainer = styled.div`
  background: ${({ theme }) => theme.colors.toggle_bg};
  width: 54px;
  height: 20px;
  border-radius: 9999px;
  position: relative;
  
  .numbers {
    display: flex;
    justify-content: space-between;
    width: 70%;
    top: -20px;
    left: 8px;
    position: absolute;
  }

  .number {
    font-size: 9px;
  }

  .theme {
    font-size: 8px;
    position: absolute;
    left: -40px;
  }

  input {
    opacity: 0;
  }

  label span {
    position: absolute;
    top: 3px;
    left: ${props => props.left};
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.toggle_dot};
    transition: all 0.5s linear;
  }
`;