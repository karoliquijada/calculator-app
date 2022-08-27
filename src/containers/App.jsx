import { useState } from "react";
import Input from "../components/input/input.component";
import Toggle from "../components/toggle/toggle.component";
import { ThemeProvider } from "styled-components";
import { light, dark, purple, GlobalStyle } from "../themes";
import { AppContainer } from "./App.styles.jsx";
import "./App.styles.jsx";
import Keys from "../components/keys/keys.component";

const CHECKBOX_STATES = {
  dark: 1,
  light: 2,
  purple: 3,
};

const App = () => {
  const [theme, setTheme] = useState(dark);
  const [checked, setChecked] = useState(CHECKBOX_STATES.dark);

  const handleThemeChange = () => {
    let updatedChecked;

    if (checked === CHECKBOX_STATES.dark) {
      updatedChecked = CHECKBOX_STATES.light;
      setTheme(light);
    } else if (checked === CHECKBOX_STATES.light) {
      updatedChecked = CHECKBOX_STATES.purple;
      setTheme(purple);
    } else if( checked === CHECKBOX_STATES.purple) {
      updatedChecked = CHECKBOX_STATES.dark;
      setTheme(dark);
    }

    setChecked(updatedChecked);
  };


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <div className="calculator">
          <Toggle value={checked} onChange={handleThemeChange}/>
          <Input/>
        </div>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
