import LoginForm from "./LoginForm";
import style from "./style.module.scss";

const Login = () => {
  return (
    <main className={style.main}>
      <div className={style.formBody}>
        <h1>Login</h1>
        <LoginForm className={style.container} />
      </div>
    </main>
  );
};

export default Login;
