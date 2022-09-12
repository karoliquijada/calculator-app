import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: flex-end;
    margin: 20px 0;
    width: 100%;

    span {
        font-size: 20px;
        font-weigth: 700;
        color:  ${({ theme }) => theme.colors.text1};
    }
`