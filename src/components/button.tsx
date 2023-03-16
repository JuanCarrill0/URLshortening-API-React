import React from "react";


interface buttonProps{
    text : String
    width : string | number;
    height : string | number;
    borderRadius : string | number;
}

export const Button = (props:buttonProps) =>{
    return(
        <div className="bg-[hsl(180,66%,49%)]  flex mx-6 text-white text-center font-bold items-center justify-center" style={{width: props.width, height : props.height, borderRadius : props.borderRadius }}>
            <button className="" >{props.text}</button>
        </div>
    );
}