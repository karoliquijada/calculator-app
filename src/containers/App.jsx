import { useState } from "react";
import Input from "../components/input/input.component";
import ToggleButton from "../components/toggle-button/toggle-button.component";
import { ThemeProvider } from "styled-components";
import { light, dark, purple, GlobalStyle } from "../themes";
import { AppContainer } from "./App.styles.jsx";
import "./App.styles.jsx";
import Keys from "../components/keys/keys.component";

const App = () => {
  const [theme, setTheme] = useState(dark);
  const [value, setValue] = useState("");

  const handleThemeChange = (theme) => {
    setTheme(theme);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <div className="calculator">
          <div className="toggle">
            <ToggleButton children={"Light Theme"} onClick={() => handleThemeChange(light)} />
            <ToggleButton children={"Dark Theme"} onClick={() => handleThemeChange(dark)} />
            <ToggleButton children={"Purple Theme"} onClick={() => handleThemeChange(purple)} />
          </div>
          <Input onChange={handleChange} value={value} />
          <Keys/>
        </div>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
