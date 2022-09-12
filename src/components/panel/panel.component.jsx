import { KeysContainer } from "./panel.styles";
import Key from "../key/key.component";

const Panel = () => {
  return (
    <KeysContainer>
        <Key children="7" />
        <Key children="8" />
        <Key children="9" />
        <Key size={true} children="DEL" />
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
        <Key width size children="RESET" />
        <Key width children="=" />
    </KeysContainer>
  );
};

export default Panel;
