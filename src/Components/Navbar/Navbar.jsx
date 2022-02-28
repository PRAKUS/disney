import React from 'react';
import { useState } from 'react';
import "./css/navbar.css"

import {Link} from "react-router-dom"

const Navbar = () => {
    const [fixed, setfixed] = useState("absolute");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
            setfixed("fixed")           
        }
              if (window.scrollY < 10) {
            setfixed("absolute")           
        }
    })
    return (
        <nav className="navbar" style={{position:`${fixed}`}}>
            <div className='container navbar-items'>
                <div className='navbar-brand'>
                    <Link to="/">
                    <img src="assets/images/logo.svg" style={{width:"100%"}}  alt="disney+"/></Link>
                </div>

                <Link to="/home" className="loginButton" >Login</Link>
            </div>
      
    </nav>)

}

export default Navbar;