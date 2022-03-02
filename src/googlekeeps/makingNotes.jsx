import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
require("./makingNotes.css")


export default function Mnotes(props) {

    const [expand,setexpand] = useState(false)
    const [row,setrow] = useState(1);
    const [note,setNote] = useState({
        title:"",
        content:""
    });


    let addNote = (e) => {
        setNote((oldData) => {
            return{...oldData,
            [e.target.name] : e.target.value,
            }
        }) 
    }

    let addEvent = () => {
        setNote({
            title:"",
            content:""
        })
        props.main(note);
    }

    let expanding = () => {
        setexpand(true);
        setrow(5);
    }
    return(<>
        <div className="container" onClick={expanding}>
            {expand?<input type="text" value={note.title} name="title" placeholder="Title" onChange={addNote}/>:null}
            <textarea name="content" value={note.content} id="" cols="30" rows={row} placeholder="Take a note..." onChange={addNote}></textarea>
            {expand?<FaPlusCircle className="icon" onClick={addEvent}/>:null}
        </div>
    </>)
}