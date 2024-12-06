import './NavigationBar.css';
<<<<<<< HEAD
// import Dashboard from '../Dashboard/Dashboard';
import { useNavigate } from 'react-router-dom';
=======
import { useNavigate, useLocation } from 'react-router-dom';
>>>>>>> 2901762921333668246a9f87d7b069ca2ae2f258
import logoutIcon from "../../../assets/logout.svg";

function NavigationBar() {
  const navigate = useNavigate();
  const location = useLocation(); // Obtém a rota atual

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

<<<<<<< HEAD
  return (
    <header className="navbar">
      
      <div className="container">
      <div className="Logout">
          <button onClick={handleLogout} className="logout-button">
          <img src={logoutIcon} alt="Logout" className="logout-icon" />
          </button>
        </div>
        <a href="/Dashboard" className="navbar-brand">Dashboard</a>
        <a href="/ListagemCliente" className="navbar-brand">Listagem de cliente</a>
        {/* <nav className="navbar-menu">
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#header" className="navbar-link"></a>
            </li>
            <li className="navbar-item">
              <a href="#about" className="navbar-link"></a>
            </li>
            <li className="navbar-item">
              <a href="#projects" className="navbar-link"></a>
            </li>
            <li className="navbar-item">
              <a href="#contact" className="navbar-link"></a>
            </li>
          </ul>
        </nav> */}
           
        <div className="navbar-info">
          <div className="navbar-info-item">
            <h6>Tempo sem pausas:</h6>
            <h3>13 dias</h3>
            </div>
          <div className="navbar-info-item">
            <h6>Média de Temperatura</h6>
            <h3>-4°C</h3>
            </div>
          <div className="navbar-info-item">
            <h6>Freezers online: </h6>
            <h3>20/20</h3>
            </div>
        </div>

=======
  // Verifica se a rota atual é o Dashboard
  const isDashboard = location.pathname === "/Dashboard";

  return (
      <div className="container">
        {/* Apenas exibe as informações no Dashboard */}
        {isDashboard && (
          <div className="navbar-info">
            <div className="navbar-info-item">
              <h6>Tempo sem pausas:</h6>
              <h3>13 dias</h3>
            </div>
            <div className="navbar-info-item">
              <h6>Média de Temperatura</h6>
              <h3>-4°C</h3>
            </div>
            <div className="navbar-info-item">
              <h6>Freezers online:</h6>
              <h3>20/20</h3>
            </div>
          </div>
        )}
>>>>>>> 2901762921333668246a9f87d7b069ca2ae2f258
      </div>
  );
}

export default NavigationBar;