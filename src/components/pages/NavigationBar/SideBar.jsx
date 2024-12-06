import React, { useState } from "react";
import "./SideBar.css";
import { useNavigate } from "react-router-dom";
import logoutIcon from "../../../assets/logout.svg";
function SideBar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
  
    const handleLogout = () => {
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("loggedInUser");
      navigate("/");
    };
  
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || null;
    const isAdmin = loggedInUser?.permissao === "admin";
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div>
        {/* Botão de hambúrguer para abrir/fechar o menu */}
        <button className="hamburger-button" onClick={toggleSidebar}>
          <span className="hamburger-icon"></span>
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
              <a href="/ListagemCliente">Listagem de Clientes</a>
            </li>
            {isAdmin && (
              <li>
                <a href="/ListagemUsuario">Listagem de Usuários</a>
              </li>
            )}
          </ul>
          {/* Botão de Logout */}
          <div className="logout-container">
            <button className="logout-button" onClick={handleLogout}>
              <img src={logoutIcon} alt="Logout" className="logout-icon" />
              Sair
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default SideBar;
  