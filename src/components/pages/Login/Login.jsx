import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import clientesData from "../../../../mockClientes.json";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const storedEmail = "admin@gmail.com";
  const storedPassword = "1234";


  useEffect(() => {
    localStorage.setItem("clientes", JSON.stringify(clientesData));

    if (location.state?.fromProtectedRoute) {
      toast.error("Você não pode acessar esta página sem estar logado.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === storedEmail && password === storedPassword) {
      localStorage.setItem("isAuthenticated",'true');

      toast.success("Login bem-sucedido!", {
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
            <label>Email:</label>
            <input
              type="email"
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
