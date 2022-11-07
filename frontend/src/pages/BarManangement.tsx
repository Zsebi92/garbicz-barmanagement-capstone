import {NavLink} from "react-router-dom";
import React from "react";
import BarGallery from "../components/Bar/BarGallery";
import UseBar from "../hooks/UseBar";
import Button from "react-bootstrap/Button";



export default function BarManagement() {

    const {bars, addBar,  getAllBars, deleteBar} = UseBar()

    return (
        <div>
            <h1>Bar-Management</h1>

            <BarGallery bars={bars} getAllBars={getAllBars} addBar={addBar}  deleteBar={deleteBar}/>

            <section><Button variant={"secondary"} size={"lg"}><NavLink className={"link-name"} to={"/"}>Back</NavLink></Button></section>
        </div>

    )
}