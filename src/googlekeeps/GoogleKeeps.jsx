import React, { useState } from "react";
import Nav from "./Nav";
import Mnotes from "./makingNotes";
import Notes from "./notes";
import g from "./GoogleKeeps.css"


export default function Keeps() {

    const [arrnote, setArrnote] = useState([]);

    let addNote = (note) => {
        setArrnote((preData) => {
            return [...preData, note]
        })
    }

    let deleted = (id) => {
        setArrnote((olditems) => {

            return olditems.filter((element, index) => {
                return index !== id
            })
        })
    }



    return (
        <>
            <div className="notesComponent">
                <div className="mnotes">
                    <Mnotes main={addNote} />
                </div>
                <div className="notesDiv">
                    {
                        arrnote.map((curvalue, index) => {
                            return (<Notes title={curvalue.title} content={curvalue.content} key={index} id={index} onClick={deleted} />)
                        })
                    }
                </div>
            </div>

        </>
    )
}