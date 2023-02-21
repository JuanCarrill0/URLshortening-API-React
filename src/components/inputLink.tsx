import React, { ChangeEventHandler } from "react";
import "../styles/inputLink.css"

import { Button } from "./button";

interface propsInput{
    onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Input = (props : propsInput) =>{
    return(
        <div className="Input">
            <div className="labelInput">
                <input type="text" placeholder="Shorten a link here ..." onChange={props.onChange} />
            </div>
            <div className="boxButton">
            <Button
                text="Shorten It !"  
                width= "100px"
                height= "35px"
                borderRadius= "8px"          
            />
            </div>
        </div>
    );
}