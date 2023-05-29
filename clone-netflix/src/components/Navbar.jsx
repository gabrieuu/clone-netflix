import React from "react";
import './NavBar.css'
import logo from '../images/netflix_logo.png'
import avatar from '../images/avatar.png'
export default () => {
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="navegacao">
                <ul className="lista">
                    <a href="#"><li>Início</li></a>
                    <a href="#"><li>Séries</li></a>
                    <a href="#"><li>Filmes</li></a>
                    <a href="#"><li>Bombando</li></a>
                    <a href="#"><li>Minha lista</li></a>
                    <a href="#"><li>Navegar por idiomas</li></a>
                </ul>
            </div>
            <div class="config">
            <div className="avatar">
                <img src={avatar} alt="" />
            </div>
            </div>
        </nav>
    )
}