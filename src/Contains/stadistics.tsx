import React from "react";

import { Cardstadistics } from "../components/cardStadistic";
import imageBrand from "../assets/icon-brand-recognition.svg"
import imageDetailed from "../assets/icon-detailed-records.svg"
import imageFully from "../assets/icon-fully-customizable.svg"

export const Stadistics = () =>{
    return(
        <div className="">
            <div className="">
                <header className="text-center">
                    <h2 className="font-bold text-4xl mb-5">Advanced Stadistics</h2>
                    <p className="text-grayish-violet font-medium">Track how your links are performing across the web with <br /> our advanced stadistics dashboard </p>
                </header>
                <div className="flex mt-12 max-lg:flex-col" >
                    <Cardstadistics 
                        marginTop= "50px"
                        image = {imageBrand}
                        title = "Brand Recognition"
                        text = "Boost your brand recognition with each click. Generic links don´t mean a thing. Branden links help instil confidence in your content. "
                    />
                    <div className="bg-cyan-400 w-9 h-2 mt-36 max-lg:w-2 max-lg:h-20 max-lg:mt-0 max-lg:mx-auto"></div>
                    <Cardstadistics 
                        marginTop= "90px"
                        image ={imageDetailed}
                        title = "Detailed Records"
                        text = "Gain insights into who is clicking your links . Knowing when and where people engage with your content helps inform better decisions."
                    />
                    <div className="bg-cyan-400 w-9 h-2 mt-40 max-lg:w-2 max-lg:h-20 max-lg:mt-0 max-lg:mx-auto"></div>
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
