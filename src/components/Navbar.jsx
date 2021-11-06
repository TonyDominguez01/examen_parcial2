import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import { authTypes } from '../types/authTypes';

const Navbar = () => {

    let estadoMenu = false;

    const MostrarOcultarMenu = () => {
        let padre = document.getElementById('nav');
        let enlaces = padre.getElementsByClassName('link');
        for (let i = 0; i < enlaces.length; i++) {
            if (estadoMenu) enlaces[i].classList.remove("mostrar-menu");
            else enlaces[i].classList.add("mostrar-menu");
        }
        estadoMenu = !estadoMenu;
    }

    const CambiarActivo = (e) => {
        if (!e.target.classList.contains('activo')){
            let elementos = document.getElementsByClassName('activo');
            for (let i = 0; i < elementos.length; i++) {
                elementos[i].classList.remove('activo');
            }
            e.target.classList.add('activo');
        }
    }

    return(
        <nav  className="nav nav-fijo">
            <div id="nav" className="contenedor">
                <div class="encabezado">
                    <p>Congreso de TICs</p>
                </div>
                <div className="nav-menu-icon" onClick={MostrarOcultarMenu}>
                    <p>☰</p>
                </div>
                <NavLink className="activo link" to="/" onClick={CambiarActivo}>Inicio</NavLink>
                <NavLink className="link" to="/participantes" onClick={CambiarActivo}>Participantes</NavLink>
            </div>
        </nav>
    )
}

export default Navbar
