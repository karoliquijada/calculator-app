import Toggle from "../toggle/toggle.component";
import { HeaderContainer } from "./header.styles";

const Header = (props) => {
  const {value, onChange} = props;
  return (
    <HeaderContainer>
      <span>calc</span>
      <Toggle value={value} onChange={onChange} />
    </HeaderContainer>
  );
};

export default Header;
