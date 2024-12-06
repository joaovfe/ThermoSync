import "./NavigationBar.css";
// import Dashboard from '../Dashboard/Dashboard';
import { useLocation, useNavigate } from "react-router-dom";
import logoutIcon from "../../../assets/logout.svg";
import SideBar from "../SideBar/sideBar";

function NavigationBar() {
  const location = useLocation();
  const shouldShowSidebar = location.pathname !== "/"; // Sidebar não aparece na página de login
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  return (
    <>
      {shouldShowSidebar && <SideBar />}
      <header className="navbar">
        <div className="container">
          <div className="dashboard">
            <a href="/Dashboard">Dashboard</a>
          </div>
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
        </div>
      </header>
    </>
  );
}

export default NavigationBar;
