// import style from "./style.module.scss";

const RadioField = (props) => {
  const { options, value, handleChange, isRequired } = props;

  return (
    <div>
      {options.map((option) => {
        return (
          <label key={option}>
            <input
              value={option}
              onChange={(event) => handleChange(event.target.value)}
              required={isRequired}
              type="radio"
              checked={value === option}
            />
            <span>{option}</span>
          </label>
        );
      })}
    </div>
  );
};

export default RadioField;
