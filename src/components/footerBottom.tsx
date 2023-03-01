import React from "react";

import "../styles/footerBottom.css"
import logo from "../assets/logo.svg"

import facebook from "../assets/icon-facebook.svg"
import twitter from "../assets/icon-twitter.svg"
import pinterest from "../assets/icon-pinterest.svg"
import instagram from "../assets/icon-instagram.svg"

export const FooterBottom = () =>{
    return(
        <div className="FooterBottom">
            <h2 className="titleFooter">Shortly</h2>
            <div className="list">
                <ul className="featureList">
                    <li className="titleNav">Features</li>
                    <li >Link Shortening</li>
                    <li >Brandend Links</li>
                    <li >Analytics</li>
                </ul>
            </div>
            <div className="list">
                <ul className="resourcesList">
                    <li className="titleNav">Resources</li>
                    <li >Blog</li>
                    <li >Developers</li>
                    <li >Support</li>
                </ul>
            </div>
            <div className="list">
                <ul className="companyList">
                    <li className="titleNav">Company</li>
                    <li >About</li>
                    <li >Our Team</li>
                    <li >Careers</li>
                    <li >Contact</li>
                </ul>
            </div>
            <div className="icons">
                <img src= {facebook} className="icon" alt="" />
                <img src= {twitter} className="icon"alt="" />
                <img src= {pinterest} className="icon"alt="" />
                <img src= {instagram} className="icon"alt="" />
            </div>
        </div>
    );
}