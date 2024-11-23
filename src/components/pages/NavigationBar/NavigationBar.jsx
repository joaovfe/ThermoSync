import React, { useState } from 'react';
import './NavigationBar.css';
import Dashboard from '../Dashboard/Dashboard';
import Sidebar from './SideBar';

function Home() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            <Dashboard />
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <NavigationBar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        </div>
    );
}

function NavigationBar({ toggleSidebar, isSidebarOpen }) {
    return (
        <header className="navbar">
            <div className="container">
                <a href="/#" className="navbar-brand">Dashboard</a>
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
                {/* Botão alternando entre ícones */}
                <button
                    onClick={toggleSidebar}
                    className={`menu-btn ${isSidebarOpen ? 'active' : ''}`}
                >
                    <span className="icon hamburger">☰</span>
                    <span className="icon close">✖</span>
                </button>
            </div>
        </header>
    );
}

export default Home;
