import React from "react";
import Keepsicon from "./assets/Keepsicon.png"
import { MdMenu } from "react-icons/md";
import nav from "./nav.css";

export default function Nav() {
    return(
        <>
            <div className="navbar">
                <ul>
                    <li className="menu"><MdMenu/></li>
                    <li><img src={Keepsicon} alt="logo" /></li>
                    <li>Keep</li>
                </ul>
            </div>
        </>
    )
}