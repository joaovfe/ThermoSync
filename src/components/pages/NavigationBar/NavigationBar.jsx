import './NavigationBar.css';
import { useNavigate } from 'react-router-dom';
import logoutIcon from "../../../assets/logout.svg";

function NavigationBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand-container">
          <a href="/#" className="navbar-brand">Dashboard</a>
          <a href="/ListagemCliente" className="navbar-brand">Listagem de Clientes</a>
        </div>
        <div className="navbar-info">
          <div className="navbar-info-item">
            <h6>Tempo sem pausas:</h6>
            <h3>13 dias</h3>
          </div>
          <div className="navbar-info-item">
            <h6>Média de Temperatura:</h6>
            <h3>-4°C</h3>
          </div>
          <div className="navbar-info-item">
            <h6>Freezers online:</h6>
            <h3>20/20</h3>
          </div>
        </div>
        <button onClick={handleLogout} className="logout-button">
          <img src={logoutIcon} alt="Logout" className="logout-icon" />
        </button>
      </div>
    </header>
  );
}

export default NavigationBar;
