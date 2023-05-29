import React from "react";
import './NavBar.css'
import logo from '../images/netflix_logo.png'
export default () => {
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="navegacao">
                <ul className="lista">
                    <li>Início</li>
                    <li>Séries</li>
                    <li>Filmes</li>
                    <li>Bombando</li>
                    <li>Minha lista</li>
                    <li>Navegar por idiomas</li>
                </ul>
            </div>
        </nav>
    )
}