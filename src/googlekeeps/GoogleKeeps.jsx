import React, { useState } from "react";
import Nav from "./Nav";
import Mnotes from "./makingNotes";
import Footer from "./footer";
import Notes from "./notes";
import g from "./GoogleKeeps.css"


export default function Keeps() {

    const [arrnote,setArrnote] = useState([]);

    let addNote = (note) => {
        setArrnote((preData) => {
            return [...preData,note]
        })
    }

    let deleted = (id) => {
        setArrnote((olditems) => { 
            olditems.filter((index) => {
                return index !== id;
            })
        })
    }

    return(
        <>
            <Nav/>
            <Mnotes main={addNote}/>
            <div className="notesDiv">
                {arrnote.map((curvalue,index) => {
                   return( <Notes title={curvalue.title} content={curvalue.content} key={index} id={index} onSelect={deleted}/>)
                })}
            </div>
            <Footer/>
        </>
    )
}