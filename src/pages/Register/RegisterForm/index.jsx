import InputField from "../../../components/FormFields/InputField";
import SelectField from "../../../components/FormFields/SelectField";
import RadioField from "../../../components/FormFields/RadioField";
import Button from "../../../components/Button";
import { useState } from "react";
import CheckboxField from "../../../components/FormFields/CheckboxField";

const RegisterForm = (props) => {
  const { registerUser } = props;

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nomePerfil, setNomePerfil] = useState("");
  const [data, setData] = useState("");
  const [genero, setGenero] = useState("");
  const [termos, setTermos] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Success => ${email}, ${senha}, ${nomePerfil}, ${data}, ${genero}, ${termos}`
    );
    registerUser({
      email,
      senha,
      nomePerfil,
      data,
      genero,
      termos,
    });
  };

  return (
    <section>
      <form action="" onSubmit={handleSubmit}>
        <InputField
          type="email"
          isRequired={true}
          value={email}
          handleChange={(value) => setEmail(value)}
          placeholder="Digite o email..."
        />
        <InputField
          type="password"
          isRequired={true}
          value={senha}
          handleChange={(value) => setSenha(value)}
          placeholder="Digite a senha..."
        />
        <InputField
          type="text"
          isRequired={true}
          value={nomePerfil}
          handleChange={(value) => setNomePerfil(value)}
          placeholder="Digite o nome do perfil..."
        />
        <InputField
          type="date"
          isRequired={true}
          value={data}
          handleChange={(value) => setData(value)}
          placeholder="Selecione a data..."
        />
        <RadioField
          options={["Masculino", "Feminino", "Outros", "Prefiro não dizer"]}
          isRequired={true}
          value={genero}
          handleChange={(value) => setGenero(value)}
        />
        <CheckboxField
          isRequired={true}
          value={termos}
          handleChange={({ target }) => setTermos(target.checked)}
        />
        <Button>Enviar</Button>
      </form>
    </section>
  );
};

export default RegisterForm;
