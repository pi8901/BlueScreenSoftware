import React, { useRef, useState } from "react";
import { NavLink } from 'react-router-dom'; 
import logo from '../../img/Logo_bluescreensoftware.png';
import './Navbar.css';

import { navItems } from './NavItems';

const Navbar = () =>  {
  
  const [menuOpen, setMenuOpen] = useState(false);

    // Funktion zum Umschalten des Menüs
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    // Schließen beim Klicken außerhalb des Feldes (Dropdown)
    const menuRef = useRef();

    window.addEventListener("click", (e) => {
      if(e.target !== menuRef.current){
        setMenuOpen(false);
      }
    })


  return (
    <nav className='navbar'>
      <NavLink to="../startseite" className="navbar-logo" activeClassName="no-active">
        <img src={logo} alt="Navigationsleiste Logo_bluescreensoftware" />
      </NavLink>
      <div ref={menuRef} className='dropdown-menu' onClick={toggleMenu}>
          <span className={menuOpen ? "open" : ""}></span>
          <span className={menuOpen ? "open" : ""}></span>
          <span className={menuOpen ? "open" : ""}></span>
      </div>


      <ul className={`nav-items ${menuOpen ? "open" : ""}`}>
        {navItems.map((item) => {
          return (
            <li key={item.id} className={`${item.cName} nav-item-${item.id}`}>
              <NavLink to={item.path} activeClassName="active">{item.title}</NavLink> 
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
