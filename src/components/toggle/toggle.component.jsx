import { useRef, useEffect } from "react";
import "./toggle.styles.jsx";

const CHECKBOX_STATES = {
  dark: 1,
  light: 2,
  purple: 3,
};

const Toggle = ({ value, onChange }) => {
  const checkRef = useRef();

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

  return (
    <div id="theme-switcher">
      <input type="checkbox" ref={checkRef} checked={value === CHECKBOX_STATES.dark} onChange={onChange} />
    </div>
  );
};

export default Toggle;
