// import style from "./style.module.scss";

const InputField = (props) => {
  const { value, handleChange, type, label, placeholder, isRequired } = props;

  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        value={value}
        onChange={(event) => handleChange(event.target.value)}
        required={isRequired}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
