import style from "./style.module.scss";

const RadioField = ({ label, value, ...props }) => {
  return (
    <div className={style.checkBox}>
      <label>
        <input value={value} type="checkbox" {...props} />
        <span>{`${label}`}</span>
      </label>
    </div>
  );
};

export default RadioField;
