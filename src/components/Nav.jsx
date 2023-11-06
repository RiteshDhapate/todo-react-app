import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import "../styles/nav.css"
import { ImMenu } from "react-icons/im";
import { AiFillCloseCircle } from "react-icons/ai";
import { SiTodoist } from "react-icons/si";
const Nav = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  const activeMenu = () => {
    const activeMenubtn = document.getElementById("menu");
    activeMenubtn.classList.toggle("activeMenu");
    setMenuIcon(!menuIcon);
  }

  return (
    <div className='navBar'>
      <div className="nav">
        <div className="logo">
            <SiTodoist className='todoIcon'/>
         <span>TODO</span>
        </div>

        <div className="menu" id='menu'>
          <ul>
            <li><NavLink to="/" onClick={activeMenu} className="link">Home</NavLink></li>
            <li><NavLink to="/about" onClick={activeMenu} className="link">About</NavLink></li>
            <li><NavLink to="/todo" onClick={activeMenu} className="link">TODO</NavLink></li>
            <li><NavLink to="/login " onClick={activeMenu} className="link">Login</NavLink></li>
          </ul>
        </div>
        <div className="menuIcon" onClick={activeMenu}>
          {menuIcon === false ? <ImMenu /> : <AiFillCloseCircle />}

        </div>
      </div>

    </div>
  )
}

export default Nav