import React  from "react";

import "../styles/footerTop.css"

import { Button } from "./button";

export const FooterTop =() => {
    return (
        <div className="FooterTop">
            <h2 className="titleFooter">Boost your links today</h2>
            <div className="buttonBox">
                <Button 
                    text= "Get Started"
                    width= "130px"
                    height = "35px"
                    borderRadius= "25px"
                />
            </div>
        </div>
    );
}