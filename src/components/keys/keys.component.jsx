import { KeysContainer } from "./keys.styles";
import Key from "../key/key.component";

const Keys = () => {
  return (
    <KeysContainer>
      <div className="container">
        <Key children="7" />
        <Key children="8" />
        <Key children="9" />
        <Key children="DEL" />
        <Key children="4" />
        <Key children="5" />
        <Key children="6" />
        <Key children="+" />
        <Key children="1" />
        <Key children="2" />
        <Key children="3" />
        <Key children="-" />
        <Key children="." />
        <Key children="0" />
        <Key children="/" />
        <Key children="x" />
        <Key children="RESET" />
        <Key children="=" />
      </div>
    </KeysContainer>
  );
};

export default Keys;
