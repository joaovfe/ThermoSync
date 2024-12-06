import './NavigationBar.css';
import { useNavigate, useLocation } from 'react-router-dom';
import logoutIcon from "../../../assets/logout.svg";

function NavigationBar() {
  const navigate = useNavigate();
  const location = useLocation(); // Obtém a rota atual

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };

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
      </div>
  );
}

export default NavigationBar;
