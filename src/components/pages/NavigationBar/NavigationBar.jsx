import './NavigationBar.css';
import Dashboard from '../Dashboard/Dashboard';

function NavigationBar() {
  return (
    <header className="navbar">
      <div className="container">
        <a href="/#" className="navbar-brand">Dashboard</a>
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

      </div>
    </header>
  );
}

export default NavigationBar;