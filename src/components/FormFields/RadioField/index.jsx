import style from "./style.module.scss";

const RadioField = ({ options, value, handleChange, label, ...props }) => {
  return (
    <div>
      <h4>{label}</h4>
      {options.map((option) => {
        return (
          <label className={style.genderLabel} key={option}>
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
