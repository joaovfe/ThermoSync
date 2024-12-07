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

  // let storedEmail = JSON.parse(localStorage.getItem("usuarios")) || ["admin@gmail.com"];
  // let storedPassword = JSON.parse(localStorage.getItem("usuarios")) || ["12345678"];
  let storedEmail = [{email: "admin@gmail.com"}];
  let storedPassword = [{senha: "12345678"}];

  storedEmail = storedEmail.map((data) => data.email)
  storedPassword = storedPassword.map((data) => data.senha)

  console.log('storedEmail: ', storedEmail);
  console.log('storedPassword: ', storedPassword);

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
    console.log(storedEmail)
    console.log('email: ', email);
    console.log('storedEmail.includes(email): ', storedEmail.includes(email));

    console.log('storedPassword: ', storedPassword);
    console.log('password: ', password);
    console.log('storedPassword.includes(password): ', storedPassword.includes(password));


    if (storedEmail.includes(email) && storedPassword.includes(password)) {
      localStorage.setItem("isAuthenticated",'true');
      
      if (email === "admin@gmail.com") {
        localStorage.setItem("admin", true)
      }

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
