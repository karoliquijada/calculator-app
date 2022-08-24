import ToggleButton from "../toggle-button/toggle-button.component";
import "./toggle.styles.css";

const Toggle = () => {
  return (
    <div id="theme-switcher">
      <ToggleButton children={"Light Theme"} onClick={() => handleThemeChange(light)} />
      <ToggleButton children={"Dark Theme"} onClick={() => handleThemeChange(dark)} />
      <ToggleButton children={"Purple Theme"} onClick={() => handleThemeChange(purple)} />
    </div>
  );
};

export default Toggle;
