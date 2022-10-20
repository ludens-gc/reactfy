// import style from "./style.module.scss"

const RadioField = ({ value, ...props }) => {
  return (
    <div>
      <label>
        <input value={value} type="checkbox" {...props} />
        <span>{`${value}`}</span>
      </label>
    </div>
  );
};

export default RadioField;
