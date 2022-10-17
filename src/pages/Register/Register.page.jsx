import { useState } from "react";
import RegisterForm from "./RegisterForm";
import style from "./style.module.scss";

const Register = () => {
  const [users, setUsers] = useState([]);

  const whenNewRegisteredUser = (user) => {
    console.log(users);
    setUsers([...users, user]);
  };

  return (
    <>
      <header>
        <img className={style.logo} src="./react.svg" alt="react logo" />
        <h2>Inscreva-se grátis e comece a curtir.</h2>
      </header>
      <main>
        <RegisterForm registerUser={(user) => whenNewRegisteredUser(user)} />
      </main>
    </>
  );
};

export default Register;
