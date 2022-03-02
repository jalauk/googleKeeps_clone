import React from "react";
import notes from "./notes.css";
import { MdDelete } from "react-icons/md";

export default function Notes(props) {
    return(
        <div className="notes">
            <h1>{props.title}</h1>
            <h4>{props.content}</h4>
            <button onClick={() => {props.onSelect(props.id)}}><MdDelete/></button>
        </div>
    )
}