import React, { useState } from "react";
import "./SideBar.css";
import { useNavigate } from "react-router-dom";
import logoutIcon from "../../../assets/logout.svg";
import hamburguer from "../../../assets/hamburguer.svg"

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };

  const isAdmin = localStorage.getItem("admin") === "true";

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-button">
      {/* Botão de hambúrguer para abrir/fechar o menu */}
      <button onClick={toggleSidebar} className="hamburguer-button-button">
        <img src={hamburguer} />
      </button>

      {/* Menu Lateral */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          &times;
        </button>
        <ul className="sidebar-menu">
          <li>
            <a href="/Dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/ListagemCliente">Listagem de cliente</a>
          </li>
          {isAdmin && (
            <li>
              <a href="/ListagemUsuario">Listagem de Usuários</a>
            </li>
          )}
        </ul>
        {/* Botão de Logout */}
        <button onClick={handleLogout} className="logout-button">
          <img src={logoutIcon} alt="Logout" className="logout-icon" />
        </button>
      </div>
    </div>
  );
}

export default SideBar;
