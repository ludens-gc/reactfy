import { useState } from "react";
import axios from "axios";
import InputField from "../../../../components/FormFields/InputField";
import Button from "../../../../components/Button";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ ...props }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(`http://localhost:3000/users/login?email=${email}`)
      .then((res) => {
        const usuario = res.data;
        console.log(usuario);
        console.log(usuario.Email);
        if (usuario.Password !== password) {
          return alert("Senha incorreta.");
        }
        localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
        alert("Usuário logado com sucesso.");
        navigate("/");
      });
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <InputField
          type="email"
          label="Email"
          required
          value={email}
          handleChange={(value) => setEmail(value)}
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
        <Button type="submit">Entrar</Button>
      </form>
    </section>
  );
};

export default LoginForm;
