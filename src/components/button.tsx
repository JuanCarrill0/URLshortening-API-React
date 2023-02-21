import React from "react";

import "../styles/button.css"

interface buttonProps{
    text : String
    width : string | number;
    height : string | number;
    borderRadius : string | number;
}

export const Button = (props:buttonProps) =>{
    return(
        <div className="Button" style={{width: props.width, height : props.height, borderRadius : props.borderRadius }}>
            <button className="buttonStyle" >{props.text}</button>
        </div>
    );
}