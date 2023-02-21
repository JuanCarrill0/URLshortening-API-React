import React from "react";

import '../styles/navBar.css'

import logo from "../assets/logo.svg"
import { Button } from "./button";


export const Navbar = () => {
    return (
        <nav className="Navbar">
            <img src= {logo} alt="" className="logo" />
            <ul className="navList">
                <li className="navLi">Features</li>
                <li className="navLi">Pricing</li>
                <li className="navLi">Resources</li>
            </ul>
            <div className="buttons">
                <button className="buttonLogin">Login</button>
                <Button
                    text= "Sign Up"
                    width= "60px"
                    height= "25px"
                    borderRadius= "15px"
                />
            </div>
        </nav>
    );
}
