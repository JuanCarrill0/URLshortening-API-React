import React from "react";

import image from "../assets/illustration-working.svg";
import { Button } from "../components/button";

export const Banner =() =>{
    return (
        <div className="flex my-16 max-md:flex-col-reverse">
            <div className="p-4 ">
                <h1 className="font-bold text-7xl max-lg:text-5xl max-lg:text-center">More than just shorter links</h1>
                <p className="text-grayish-violet font-medium text-xl mt-7 max-lg:text-center">Build your brand´s recognition and get
                    detailed <br /> insights on now your links are performing</p>
                <div className="mt-11 relative right-6 max-lg:flex max-lg:justify-center max-lg:right-0">
                    <Button 
                        text= "Get Started"
                        width= "180px"
                        height= "50px"
                        borderRadius= "45px"
                    /> 
                </div>  
            </div>
            <div className="relative left-24 scale-150 p-18 mt-14 max-sm:mb-20">
                <img className="" src= {image} alt="" />
            </div>

        </div>
    );
}