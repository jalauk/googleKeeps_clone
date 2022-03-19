import React from "react";
import * as Ai from "react-icons/ai";
import * as Md from "react-icons/md";
import * as Bi from "react-icons/bi";
require("./SideElement.css")

export default function SideElement(props) {
    if (props.type === 'Ai') {
        return (
            <div className="sideelement">
                <div className="icons">{React.createElement(Ai[props.icon])}</div>
                <div className="text">{props.text}</div>
            </div>);
    }
    else if (props.type === 'Md') {
        return (
            <div className="sideelement">
                <div className="icons">{React.createElement(Md[props.icon])}</div>
                <div className="text">{props.text}</div>
            </div>);
    }
    else{
        return (
            <div className="sideelement">
                <div className="icons">{React.createElement(Bi[props.icon])}</div>
                <div className="text">{props.text}</div>
            </div>);
    }
}


