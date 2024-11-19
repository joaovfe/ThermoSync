import React from 'react';
import './SideBar.css';

function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
            <button onClick={toggleSidebar} className="close-btn">×</button>
            <nav>
                <ul>
                    <li><a href="#section1">Section 1</a></li>
                    <li><a href="#section2">Section 2</a></li>
                    <li><a href="#section3">Section 3</a></li>
                </ul>
            </nav>
        </div>
    );
}


export default Sidebar;
