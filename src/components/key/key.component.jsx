import { KeyContainer } from "./key.styles";

const Key = ({ children, width, bg }) => {
  const onClick = (e) => {
    console.log(e.target.value);
  }
  return (
    <KeyContainer column={width} background={bg}>
      <button type="button" value={children} onClick={onClick}>
        {children}
      </button>
    </KeyContainer>
  );
};

export default Key;
