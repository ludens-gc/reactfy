// import style from "./style.module.scss";

const RadioField = ({ options, value, handleChange, label, ...props }) => {
  return (
    <div>
      <label>{label}</label>
      {options.map((option) => {
        return (
          <label key={option}>
            <input
              value={option}
              onChange={(event) => handleChange(event.target.value)}
              type="radio"
              checked={value === option}
              {...props}
            />
            <span>{option}</span>
          </label>
        );
      })}
    </div>
  );
};

export default RadioField;
