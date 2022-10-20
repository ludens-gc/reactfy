// import style from "./style.module.scss";

const InputField = ({
  value,
  handleChange,
  type,
  label,
  placeholder,
  ...props
}) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        value={value}
        onChange={(event) => handleChange(event.target.value)}
        type={type}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default InputField;
