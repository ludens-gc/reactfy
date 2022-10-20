import { useState } from "react";
import RegisterForm from "./RegisterForm";
import style from "./style.module.scss";

const Register = () => {
  const [users, setUsers] = useState([]);

  const whenNewRegisteredUser = (user) => {
    console.log(users);
    setUsers([...users, user]);
  };

  console.log(users);

  return (
    <>
      <h1>Cadastro</h1>
      <RegisterForm registerUser={(user) => whenNewRegisteredUser(user)} />
    </>
  );
};

export default Register;
