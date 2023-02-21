import React from "react";

import "../styles/banner.css"

import image from "../assets/illustration-working.svg";
import { Button } from "./button";

export const Banner =() =>{
    return (
        <div className="Banner">
            <div className="infoLeft">
                <h1 className="title">More than just shorter links</h1>
                <p className="text">Build your brand´s recognition and get
                    detailed insights on now your links are performing</p>
                <Button 
                    text= "Get Started"
                    width= "90px"
                    height= "25px"
                    borderRadius= "15px"
                />   
            </div>
            <div className="imageRight">
                <img src= {image} alt="" />
            </div>

        </div>
    );
}