import { InputContainer } from "./input.styles";

const Input = ({onChange, value}) => {

  return (
    <InputContainer>
      <input onChange={onChange}  value={value} className="input" type="text" placeholder="type something" />
    </InputContainer>
  );
};

export default Input;
