import { KeyContainer } from "./key.styles";

const Key = ({ children='1', onClick }) => {
  return (
    <KeyContainer>
      <button type="button" onClick={onClick}>
        {children}
      </button>
    </KeyContainer>
  );
};

export default Key;
