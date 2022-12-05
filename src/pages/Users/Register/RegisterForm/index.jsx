import InputField from "../../../../components/FormFields/InputField";
import RadioField from "../../../../components/FormFields/RadioField";
import Button from "../../../../components/Button";
import { useState } from "react";
import CheckboxField from "../../../../components/FormFields/CheckboxField";
import axios from "axios";

const RegisterForm = (props) => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [terms, setTerms] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === confirmEmail) {
      axios
        .post("http://localhost:3000/users/register/", {
          id: id,
          Email: email,
          Password: password,
          UserName: userName,
          Birthdate: birthDate,
          Gender: gender,
        })
        .then(() => {
          alert("Usuário cadastrado.");
          console.log(
            `Success => ${email}, ${password}, ${userName}, ${birthDate}, ${gender}, ${terms}`
          );
        });
    } else {
      console.log("emails diferentes");
    }
  };

  const handleBlur = (event) => {
    console.log(event.target.value);
  };

  return (
    <section>
      <form action="" onSubmit={handleSubmit}>
        <InputField
          type="number"
          label="id"
          required
          value={id}
          handleChange={(value) => setId(value)}
          placeholder="Digite o id..."
        />
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
          value={confirmEmail}
          onBlur={handleBlur}
          handleChange={(value) => setConfirmEmail(value)}
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
        <Button type="submit">Enviar</Button>
      </form>
    </section>
  );
};

export default RegisterForm;
