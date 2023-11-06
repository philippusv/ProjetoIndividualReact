import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./Cadastro.css";

const dados = {
  login: "LucasLatsch",
  senha: "123456",
};

export default function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [users, setUsers] = useState([]); // Array para armazenar os dados dos usuários
  const [error, setError] = useState("");

  // const navigate = useNavigate();
  const navigate = useNavigate();
  const { parametro } = useParams();

  // Use o useEffect para recuperar o array de usuários quando o componente é montado
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, []);

  // function entrar(){} ou
  const entrar = () => {
    if (login === "" || senha === "") {
      setError("Preencha todos os campos");
    } else {
      const existingUser = users.find((user) => user.login === login);

      if (existingUser) {
        setError("Este login já está em uso. Escolha outro.");
      } else {
        // Adicione o novo usuário ao array
        const newUser = { login, senha };
        const updatedUsers = [...users, newUser];
        setUsers(updatedUsers);

        // Salve o array atualizado no localStorage
        localStorage.setItem("users", JSON.stringify(updatedUsers));

        setError("");

        // Limpe os campos de entrada
        setLogin("");
        setSenha("");
        navigate("/login");
      }
    }
  };

  return (
    <div className="main-card">
      {/* <div className="card-left">
        <h1 className="label-login">Espaço para a logo</h1>
      </div> */}
      <div className="card-rigth">
        <form className="card-login">
          <h1 className="label-login">Bem Vindo!</h1>
          <div className="textfield">
            <label className="label" htmlFor="usuario">
              Usuário
            </label>
            <input
              className="input-login"
              type="text"
              placeholder="Digite seu nome ou email"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>
          <div className="textfield">
            <label className="label" htmlFor="senha">
              Senha
            </label>
            <input
              className="input-login"
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button className="btn" type="button" onClick={entrar}>
            {/* <Link to={"/Login"} className="botao"> */}
            Cadastrar
            {/* </Link> */}
          </button>
        </form>
      </div>
      {/* <Nav /> */}
    </div>
  );
}
