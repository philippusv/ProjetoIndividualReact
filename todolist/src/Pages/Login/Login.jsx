import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./Login.css";

const dados = {
  login: "Felipe",
  senha: "123456",
};

export default function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // const navigate = useNavigate();
  const navigate = useNavigate();
  const { parametro } = useParams();

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
      const user = users.find(
        (user) => user.login === login && user.senha === senha
      );

      if (user) {
        setIsLoggedIn(true);
        setCurrentUser(user);
        setError("");
        navigate("/pagtodo"); // Rota após o login bem-sucedido
      } else {
        setError("Credenciais inválidas, tente novamente.");
      }
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  return (
    <div className="main-card">
      <div className="card-left">
        <h1 className="label-login">Espaço para a logo</h1>
      </div>
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
          {error && <p className="error-message">{error}</p>}{" "}
          <button className="btn" type="button" onClick={entrar}>
            Entrar
          </button>
          <p className="registrar">
            Não tem uma conta?{" "}
            <Link to="/cadastro" className="ir">
              Registre-se
            </Link>
          </p>
        </form>
      </div>
      {/* <Nav /> */}
    </div>
  );
}
