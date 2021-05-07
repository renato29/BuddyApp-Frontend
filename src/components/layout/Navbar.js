import React from 'react';
import logo from '../IMGS/buddyLogo.png';
import { NavLink, Link } from 'react-router-dom';

const Navbar =() => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand ml-5" to="/">
            <img src={logo} alt = "logoapp"/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/signup">Register</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/search">Search 
                        </NavLink>
                    </li>
                    <>
                    
                    </>
                    
                    
                </ul>
            </div>
        </nav>
    )
}
export default Navbar
;