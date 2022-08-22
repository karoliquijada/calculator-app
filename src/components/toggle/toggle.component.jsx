import { useState } from "react";
import "./toggle.styles.css";

const Toggle = () => {
    const [theme, setTheme] = useState('dark'); //Revisar cual debe ser el valor incial 

    const handleChange = (e) => {
        setTheme(e.target.value);
        console.log('Theme value', theme);
    }

  return (
    <div id="theme-switcher">
      <div>
        <label>
          <input onChange={handleChange} type="radio" id="dark" name="theme" value="dark" />
          Dark
        </label>
      </div>
      <div>
        <label>
          <input  onChange={handleChange} type="radio" id="light" name="theme" value="light" />
          Light
        </label>
      </div>
    </div>
  );
};

export default Toggle;
