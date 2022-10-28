import {NavLink} from "react-router-dom";
import React from "react";
import BarGallery from "../components/BarGallery";
import useBar from "../hooks/UseBar";



export default function BarManagement() {

    const {bar, addBar,  getAllBars, deleteBar} = useBar()

    return (
        <div>
            <h1>Bar-Management</h1>

            <BarGallery bars={bar} getAllBars={getAllBars} addBar={addBar}  deleteBar={deleteBar}/>

            <section><button><NavLink to={"/"}>Back</NavLink></button></section>
        </div>


    )
}