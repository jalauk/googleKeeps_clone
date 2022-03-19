import React from "react";
import SideElement from "./SideElement";
require('./Sidebar.css')
export default function Sidebar() {

    return (
        <div className="sidebar">
            <SideElement icon="AiOutlineBulb" text="Notes" type="Ai"/>
            <SideElement icon="AiOutlineBell" text="Reminders" type="Ai"/>
            <SideElement icon="MdOutlineEdit" text="Edit labels" type="Md"/>
            <SideElement icon="BiArchiveIn" text="Archives" type="Bi"/>
            <SideElement icon="BiTrash" text="Trash" type="Bi"/>
        </div>
    );

}