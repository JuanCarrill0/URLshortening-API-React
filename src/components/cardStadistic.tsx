import React from "react";

interface propsCard{
    marginTop: string | number
    image: string
    title: String
    text: String
}

export const Cardstadistics = (props:propsCard) =>{
    const desktopStyles = {
        marginTop: "0px",
    }

    const styles = {
        marginTop: props.marginTop,
    }

    return(
        <div className="flex flex-col bg-white h-64 w-2/6 mx-auto max-lg:w-4/6 " 
             style={Object.assign(styles, {'@media (max-width: 768px)': desktopStyles})}>
            <div className="bg-violet w-20 h-20 flex items-center justify-center rounded-full relative bottom-8 left-7 max-lg:mx-auto max-lg:left-0">
                <img src={props.image} alt="" />
            </div>
            <div className="px-8 pb-2">
                <h3 className="font-bold text-xl mb-3 ">{props.title}</h3>
                <p className="text-sm text-grayish-violet">{props.text}</p>
            </div>
        </div>
    );
}
