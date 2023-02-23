import React from "react";

import "../styles/stadistics.css"
import { Cardstadistics } from "./cardStadistic";
import imageBrand from "../assets/icon-brand-recognition.svg"
import imageDetailed from "../assets/icon-detailed-records.svg"
import imageFully from "../assets/icon-fully-customizable.svg"

export const Stadistics = () =>{
    return(
        <div className="Stadistics">
            <div className="infoStadistic">
                <header className="infoHeader">
                    <h2 className="titleHeader">Advanced Stadistics</h2>
                    <p className="textHeader">Track how your links are performing across the web with our advanced stadistics dashboard </p>
                </header>
                <div className="Card">
                    <Cardstadistics 
                        marginTop= "50px"
                        image = {imageBrand}
                        title = "Brand Recognition"
                        text = "Boost your brand recognition with each click. Generic links don´t mean a thing. Branden links help instil confidence in your content. "
                    />
                    <div className="lineCyan"></div>
                    <Cardstadistics 
                        marginTop= "90px"
                        image ={imageDetailed}
                        title = "Detailed Records"
                        text = "Gain insights into who is clicking your links . Knowing when and where people engage with your content helps inform better decisions."
                    />
                    <div className="lineCyan"></div>
                    <Cardstadistics 
                        marginTop= "130px"
                        image ={imageFully}
                        title = "Fully Customizable"
                        text = "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
                    />
                </div>
            </div>
        </div>
    );
}
