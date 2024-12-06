import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Credenciais fixas
  const storedEmail = "admin@gmail.com";
  const storedPassword = "X234tyouvx4,.?";

  useEffect(() => {
    if (location.state?.fromProtectedRoute) {
      toast.error("Você não pode acessar esta página sem estar logado.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prioriza credenciais fixas 
    if (email === storedEmail && password === storedPassword) {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ nome: "Administrador", username: storedEmail })
      );

      toast.success("Login como Administrador realizado com sucesso!", {
        position: "top-right",
        autoClose: 2000,
      });
      navigate("/Dashboard");
      return;
    }

    // Caso nao tenha que usar as credenciais fixas
    const users = JSON.parse(localStorage.getItem("usuarios")) || [];
    const user = users.find((u) => u.username === email && u.password === password);

    if (user) {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("loggedInUser", JSON.stringify(user));

      toast.success(`Bem-vindo, ${user.nome}!`, {
        position: "top-right",
        autoClose: 2000,
      });
      navigate("/Dashboard");
    } else {
      toast.error("Credenciais inválidas.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="wrapper">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Usuário (Email ou Username):</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Senha:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="button_login">
            Entrar
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
