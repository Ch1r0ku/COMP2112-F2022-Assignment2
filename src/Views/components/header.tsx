import React from 'react';
import {NavLink} from 'react-router-dom';

function Header()
{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink to={"/home"} className="navbar-brand">Assignment 2</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <NavLink to={"/home"} className="nav-link " id="Home" aria-current="page" ><i className="fa-solid fa-house fa-lg"></i> Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/about"} className="nav-link " id="About" aria-current="page" ><i className="fa-solid fa-circle-info fa-lg"></i> About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/projects"} className="nav-link " id="Projects" aria-current="page" ><i className="fa-solid fa-folder-open fa-lg"></i> Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/services"} className="nav-link " id="Services" aria-current="page" ><i className="fa-solid fa-signs-post fa-lg"></i> Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/contact"} className="nav-link " id="Contact" aria-current="page" ><i className="fa-solid fa-phone fa-lg"></i> Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  );
}

export default Header;