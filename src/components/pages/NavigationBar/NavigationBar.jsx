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
            <NavigationBar toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Dashboard />
        </div>
    );
}

function NavigationBar({ toggleSidebar }) {
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
              <button onClick={toggleSidebar} className="menu-btn">
                  &#9776; Menu
              </button>
            </div>
        </header>
    );
}

export default Home;
