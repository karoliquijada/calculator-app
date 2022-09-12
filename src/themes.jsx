import {createGlobalStyle} from "styled-components";

export const light = {
  name: "light_theme",
  colors: {
    main_bg: "hsl(0, 0%, 90%)",
    toggle_bg: "hsl(0, 5%, 81%)",
    screen_bg: "hsl(0, 0%, 93%)",
    key: "hsl(185, 42%, 37%)",
    key_shadow: "hsl(185, 58%, 25%)",
    toggle_dot: "hsl(25, 98%, 40%)",
    dot_shadow: "hsl(25, 99%, 27%)",
    reset_bg: "hsl(45, 7%, 89%)",
    reset_shadow: "hsl(35, 11%, 61%)",
    text1: "hsl(60, 10%, 19%)",
    text2: "hsl(0, 0, 100%)",
  },
};

export const dark = {
  name: "dark_theme",
  colors: {
    main_bg: "hsl(222, 26%, 31%)",
    toggle_bg: "hsl(223, 31%, 20%)",
    screen_bg: "hsl(224, 36%, 15%)",
    key: "hsl(225, 21%, 49%)",
    key_shadow: "hsl(224, 28%, 35%)",
    toggle_dot: "hsl(6, 63%, 50%)",
    dot_shadow: "hsl(6, 70%, 34%)",
    reset_bg: "hsl(30, 25%, 89%)",
    reset_shadow: "hsl(28, 16%, 65%)",
    text1: "hsl(0, 0, 100%)", 
    text2: "hsl(221, 14%, 31%)",
  },
};

export const purple = {
  name: "purple_theme",
  colors: {
    main_bg: "hsl(268, 75%, 9%)",
    toggle_bg: "hsl(268, 71%, 12%)",
    screen_bg: "hsl(268, 71%, 12%)",
    key: "hsl(281, 89%, 26%)",
    key_shadow: "hsl(285, 91%, 52%)",
    toggle_dot: "hsl(176, 100%, 44%)",
    dot_shadow: "hsl(177, 92%, 70%)",
    reset_bg: "hsl(268, 47%, 21%)",
    reset_shadow: "hsl(290, 70%, 36%)",
    text1: "hsl(52, 100%, 62%)",
    text2: "hsl(198, 20%, 13%)",
  },
};

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.main_bg};
    font-family: LeagueSpartan-Black, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
  }
`;