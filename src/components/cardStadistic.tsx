import React from "react";

import "../styles/cardStadistic.css"


interface propsCard{
    marginTop: string | number
    image: string
    title: String
    text: String
}

export const Cardstadistics = (props:propsCard) =>{
    return(
        <div className="cardStadistic" style={{marginTop : props.marginTop}}>
            <div className="imageCard">
                <img src={props.image} alt="" />
            </div>
            <div className="infoCard">
                <h3 className="titleCard">{props.title}</h3>
                <p className="textCard">{props.text}</p>
            </div>
        </div>
    );
}