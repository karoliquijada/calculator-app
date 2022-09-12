import { useRef, useEffect, useState } from "react";
import { ToggleContainer } from "./toggle.styles.jsx";
import "./toggle.styles.jsx";

const CHECKBOX_STATES = {
  dark: 1,
  light: 2,
  purple: 3,
};

const Toggle = ({ value, onChange }) => {
  const checkRef = useRef();
  const [theme, setTheme] = useState(2);
  const [position, setPosition] = useState("10%");

  useEffect(() => {
    if (value === CHECKBOX_STATES.dark) {
      checkRef.current.checked = true;
      checkRef.current.indeterminate = false;
    } else if (value === CHECKBOX_STATES.light) {
      checkRef.current.checked = false;
    } else if (value === CHECKBOX_STATES.purple) {
      checkRef.current.checked = false;
      checkRef.current.indeterminate = true;
    }
  }, [value]);

  const handleClick = (e) => {
    if (theme === 1) {
      setPosition("10%");
      setTheme(2);
    } else if (theme === 2){
      setPosition("35%");
      setTheme(3);
    } else if (theme === 3) {
      setPosition("64%");
      setTheme(1);
    }
  }

  return (
    <ToggleContainer left={position}>
      <span className="theme">THEME</span>
      <div className="numbers">
        <span className="number">1</span>
        <span className="number">2</span>
        <span className="number">3</span>
      </div>
      <label>
        <input
          type="checkbox" 
          ref={checkRef}
          checked={value === CHECKBOX_STATES.dark} 
          onChange={onChange} 
          onClick={handleClick} />
        <span></span>      
      </label>     
    </ToggleContainer>
  );
};

export default Toggle;
