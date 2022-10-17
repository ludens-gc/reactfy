// import style from "./style.module.scss";

const SelectField = (props) => {
  const { value, handleChange, label, itens, isRequired } = props;
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <select
        required={isRequired}
        name={label}
        id={label}
        value={value}
        onChange={(event) => handleChange(event.target.value)}
      >
        <option disabled value="">
          Selecione...
        </option>
        {itens.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectField;
