const Input = ({ type, placeholder, onInputChange , onChange }) => {
  return <input type={type} placeholder={placeholder} onChange = {onChange} />;
};

export default Input;
