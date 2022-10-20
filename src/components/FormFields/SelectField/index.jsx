// import style from "./style.module.scss";

const SelectField = ({ value, handleChange, label, itens, ...props }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <select
        name={label}
        id={label}
        value={value}
        onChange={(event) => handleChange(event.target.value)}
        {...props}
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
