import './NavigationBar.css';
import Dashboard from '../Dashboard/Dashboard';
import { useNavigate } from 'react-router-dom';

function Home(){
    return (
        <div>
            <NavigationBar />
            <Dashboard />
        </div>
    )
}
function NavigationBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  return (
    <header className="navbar">
      <div className="container">
        <a href="/#" className="navbar-brand">Dashboard</a>
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
              <div className="Logout">
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
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

      </div>
    </header>
  );
}

export default Home;