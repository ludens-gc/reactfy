import style from "./style.module.scss";

const Button = ({ children, ...props }) => {
  return (
    <button className={style.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
