import React from "react";

interface propsCard{
    marginTop: string | number
    image: string
    title: String
    text: String
}

export const Cardstadistics = (props:propsCard) =>{
    return(
        <div className="bg-white w-96 h-64" style={{marginTop : props.marginTop}}>
            <div className="bg-violet w-20 h-20 flex items-center justify-center rounded-full relative bottom-8 left-7">
                <img src={props.image} alt="" />
            </div>
            <div className="px-8 pb-2">
                <h3 className="font-bold text-xl mb-3 ">{props.title}</h3>
                <p className="text-sm text-grayish-violet">{props.text}</p>
            </div>
        </div>
    );
}