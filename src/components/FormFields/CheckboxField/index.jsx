// import style from "./style.module.scss";

import { useState } from "react";

const RadioField = (props) => {
  const { value, handleChange, isRequired } = props;

  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <label>
        <input
          value={value}
          onChange={handleChange}
          required={isRequired}
          type="checkbox"
          checked={isChecked}
        />
        <span>{`${value}`}</span>
        <span>{isChecked ? "Selected" : "Unchecked"}</span>
      </label>
    </div>
  );
};

export default RadioField;
