import React  from "react";

import  Background  from "../assets/bg-boost-desktop.svg"

import { Button } from "../components/button";

export const FooterTop =() => {
    return (
        <div className="bg-dark-violet flex flex-col items-center justify-center" style={{ backgroundImage: `url(${Background})` }}>
            <h2 className="text-center text-white font-bold text-4xl mt-14">Boost your links today</h2>
            <div className="mt-10 mb-14">
                <Button 
                    text= "Get Started"
                    width= "180px"
                    height = "50px"
                    borderRadius= "25px"
                />
            </div>
        </div>
    );
}