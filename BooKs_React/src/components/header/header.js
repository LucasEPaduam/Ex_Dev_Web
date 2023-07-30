import React from "react";
import './header.css';
import {NavLink} from 'react-router-dom';

const Header = () =>{
    return(
        <header className="Header">
            <nav>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/novolivro'>NovoLivro</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;