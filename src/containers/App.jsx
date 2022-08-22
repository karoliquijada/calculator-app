import { useState } from "react";
import Input from "../components/input/input.component";
import Toggle from "../components/toggle/toggle.component";
import "./App.css";

const TOGGLE_TYPE_CLASSES = {
  light: "light-theme",
  dark: "dark-theme",
};

const App = () => {
  const [theme, setTheme] = useState('dark');

  return (
    <div className="App">
      <Toggle/>
      <Input />
    </div>
  );
};

export default App;
