// import style from "./style.module.scss";

const Button = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
