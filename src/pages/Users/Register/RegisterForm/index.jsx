import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import InputField from "../../../../components/FormFields/InputField";
import RadioField from "../../../../components/FormFields/RadioField";
import Button from "../../../../components/Button";
import CheckboxField from "../../../../components/FormFields/CheckboxField";
import style from "./style.module.scss";

const RegisterForm = ({ className, ...props }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [matchEmail, setMatchEmail] = useState("");
  const [validMatchEmail, setValidMatchEmail] = useState(false);

  const [password, setPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState("");
  const [validMatchPassword, setValidMatchPassword] = useState(false);

  const [userName, setUserName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [terms, setTerms] = useState(false);

  useEffect(() => {
    const match = email === matchEmail;
    setValidMatchEmail(match);
  }, [email, matchEmail]);

  useEffect(() => {
    const match = password === matchPassword;
    setValidMatchPassword(match);
  }, [password, matchPassword]);

  useEffect(() => {
    const termsAccepted = terms;
    console.log(termsAccepted);
  }, [terms]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validMatchEmail && validMatchPassword) {
      axios
        .post("http://localhost:3000/users/register/", {
          Email: email,
          Password: password,
          UserName: userName,
          Birthdate: birthDate,
          Gender: gender,
        })
        .then(() => {
          console.log(
            `Success => ${email}, ${password}, ${userName}, ${birthDate}, ${gender}, ${terms}`
          );
        });
      alert("Usuário cadastrado com sucesso.");
      navigate("/users/login/");
    } else {
      console.log(`Emails iguais ? ${validMatchEmail}`);
      console.log(`Senhas iguais ? ${validMatchPassword}`);
      const error = !validMatchEmail
        ? alert("Os emails devem ser iguais.")
        : alert("As senhas devem ser iguais");
      return error;
    }
  };

  return (
    <section className={className}>
      <form onSubmit={handleSubmit}>
        <div className={style.inputGroup}>
          <InputField
            type="email"
            label="Email"
            required
            value={email}
            handleChange={(value) => setEmail(value)}
            placeholder="Digite o email..."
          />
          <InputField
            type="email"
            label="Confirmar email"
            required
            value={matchEmail}
            handleChange={(value) => setMatchEmail(value)}
            placeholder="Digite o email..."
          />
          <InputField
            type="password"
            label="Senha"
            value={password}
            required
            handleChange={(value) => setPassword(value)}
            placeholder="Digite a senha..."
          />
          <InputField
            type="password"
            label="Confirmar senha"
            value={matchPassword}
            required
            handleChange={(value) => setMatchPassword(value)}
            placeholder="Digite a senha..."
          />
          <InputField
            type="text"
            label="Nome do Perfil"
            value={userName}
            required
            handleChange={(value) => setUserName(value)}
            placeholder="Digite o nome do perfil..."
          />
          <InputField
            type="date"
            label="Data de nascimento"
            value={birthDate}
            handleChange={(value) => setBirthDate(value)}
            required
            placeholder="Selecione a data..."
          />
        </div>
        <RadioField
          options={["Masculino", "Feminino", "Outros", "Prefiro não dizer"]}
          label="Gênero"
          value={gender}
          required
          handleChange={(value) => setGender(value)}
        />
        <CheckboxField
          value={terms}
          label="Li e aceito os termos"
          required
          checked={terms}
          onChange={() => setTerms((prev) => !prev)}
        />
        <Button type="submit" disabled={!terms ? true : false}>
          Enviar
        </Button>
      </form>
    </section>
  );
};

export default RegisterForm;
