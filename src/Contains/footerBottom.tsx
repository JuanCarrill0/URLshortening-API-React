import React from "react";

import facebook from "../assets/icon-facebook.svg"
import twitter from "../assets/icon-twitter.svg"
import pinterest from "../assets/icon-pinterest.svg"
import instagram from "../assets/icon-instagram.svg"

export const FooterBottom = () =>{
    return(
        <div className="bg-dark text-white grid grid-cols-6 text-sm pb-12 pt-7 gap-14 max-sm:flex max-sm:flex-col max-sm:flex-1 max-sm:gap-0">
            <h2 className="col-span-2 text-center mt-12 font-bold text-3xl mx-auto">Shortly</h2>
            <div className="mt-12 mx-auto">
                <ul className="">
                    <li className="font-bold mb-5 ">Features</li>
                    <li >Link Shortening</li>
                    <li >Brandend Links</li>
                    <li >Analytics</li>
                </ul>
            </div>
            <div className="mt-12 mx-auto">
                <ul className="">
                    <li className="font-bold mb-5">Resources</li>
                    <li >Blog</li>
                    <li >Developers</li>
                    <li >Support</li>
                </ul>
            </div>
            <div className="mt-12 mx-auto">
                <ul className="">
                    <li className="font-bold mb-5">Company</li>
                    <li >About</li>
                    <li >Our Team</li>
                    <li >Careers</li>
                    <li >Contact</li>
                </ul>
            </div>
            <div className="grid grid-cols-4 mt-12 relative right-7 gap-2 max-sm:right-0 max-sm:mx-auto max-sm:gap-6">
                <img src= {facebook} className="" alt="" />
                <img src= {twitter} className=""alt="" />
                <img src= {pinterest} className=""alt="" />
                <img src= {instagram} className=""alt="" />
            </div>
        </div>
    );
}