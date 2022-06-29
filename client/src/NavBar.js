import React from "react";
import './NavBar.css';

function NavBar() {
    return(
        <nav className="nav-bar">
            <ul className="nav-bar_list">
                <a><li>Equipamiento</li></a>
                <a><li>Turnos</li></a>
                <a><li>Modificar</li></a>
                <a><li>Cerrar sesión</li></a>
            </ul>
        </nav>
    );
}

export {NavBar};