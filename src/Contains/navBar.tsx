import React from "react";

import logo from "../assets/logo.svg"
import { Button } from "../components/button";


export const Navbar = () => {
    return (
        <nav className="flex items-center py-11 ">
            <div className="pl-4 mr-7">
                <img src= {logo} alt="" className="w-11/12" />
            </div>
            <div className="mr-5 ">
                <ul className="flex gap-6 text-sm font-bold text-grayish-violet">
                        <li className="">Features</li>
                        <li className="">Pricing</li>
                        <li className="">Resources</li>
                    </ul>
            </div>
            <div className="flex ml-auto " >
                <button className="font-bold text-sm">Login</button>
                <Button
                    text= "Sign Up"
                    width= "90px"
                    height= "34px"
                    borderRadius= "15px"
                />
            </div>
        </nav>
    );
}
