import React from 'react';
import './SideBar.css';

function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
            {/* <button onClick={toggleSidebar} className="close-btn">×</button> */}
            <nav className='section'>
                <ul>
                    <li><a href="#section1" id='link-sidebar'>Adicionar Cliente</a></li>
                    <li><a href="#section2" id='link-sidebar'>Adicionar Usuário</a></li>
                </ul>
            </nav>
        </div>
    );
}


export default Sidebar;
