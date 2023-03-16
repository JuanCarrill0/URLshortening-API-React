import React, { ChangeEventHandler } from "react";

import { Button } from "../components/button";
import  Background  from "../assets/bg-shorten-desktop.svg"

interface propsInput{
    onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Input = (props : propsInput) =>{
    return(
        <div className="bg-dark-violet flex items-center p-12 mb-16 relative top-10" style={{ backgroundImage: `url(${Background})` }}>
            <div className="flex-1 ">
                <input className="p-4 rounded-lg w-full" type="text" placeholder="Shorten a link here ..." onChange={props.onChange} />
            </div>
            <div className="">
            <Button
                text="Shorten It !"  
                width= "170px"
                height= "60px"
                borderRadius= "8px"          
            />
            </div>
        </div>
    );
}