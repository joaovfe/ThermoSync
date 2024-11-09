import { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify';
import clientesData from "../../../../mockClientes.json";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const storedEmail = "admin@gmail.com";
  const storedPassword = "1234";

  const handleSubmit = (e) => {
    e.preventDefault();     
    if (email === storedEmail && password === storedPassword) {
        // toast.success('Login bem-sucedido!', {
        //     position: 'top-right',
        // });
        // setTimeout(() => {
            navigate('/Dashboard'); 
        // }, 2000); 
    }else {
        toast.error('Credenciais inválidas.', {
            position: 'top-right',
        });
    }
};

const initMockData = (data) => {
  localStorage.setItem('clientes', JSON.stringify(data));
};

initMockData(clientesData);

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
        <button type="submit">Entrar</button>
      </form>
      <ToastContainer />
    </div>
    </div>
  );
};

export default Login;
