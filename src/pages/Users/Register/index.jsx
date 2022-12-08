import RegisterForm from "./RegisterForm";
import style from "./style.module.scss";

const Register = () => {
  return (
    <main className={style.main}>
      <div className={style.formBody}>
        <h1>Cadastro</h1>
        <RegisterForm className={style.container} />
      </div>
    </main>
  );
};

export default Register;
