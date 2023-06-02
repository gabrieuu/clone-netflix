import { useState } from "react";
import './NavBar.css'
import logo from '../images/netflix_logo.png'
import avatar from '../images/avatar.png'
import MenuIcon from '@mui/icons-material/Menu';
export default () => {

    const [menu,setMenu] = useState(false)

    return (
        <nav>
            <div className="bar">
            
                <div className="navegacao">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <ul className="lista">
                        <a href="#"><li>Início</li></a>
                        <a href="#"><li>Séries</li></a>
                        <a href="#"><li>Filmes</li></a>
                        <a href="#"><li>Bombando</li></a>
                        <a href="#"><li>Minha lista</li></a>
                        <a href="#"><li>Navegar por idiomas</li></a>
                    </ul>

                
                </div>
                <div className="config">
                    <div className="avatar">
                        <img src={avatar} alt="" />
                    </div>
                    <div className="menu-hamburguer">
                        <MenuIcon style={{fontSize:40, color:'#e5e5e5'}}/> 
                    </div>
                </div>  
            </div>
                     
        </nav>
    )
}