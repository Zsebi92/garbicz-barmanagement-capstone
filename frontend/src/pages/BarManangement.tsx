import {NavLink} from "react-router-dom";
import React from "react";
import BarGallery from "../components/Bar/BarGallery";
import UseBar from "../hooks/UseBar";
import Button from "react-bootstrap/Button";
import ModalAddBar from "../components/Modal/ModalAddBar";



export default function BarManagement() {

    const {bar, bars, addBar,  getAllBars, deleteBar} = UseBar()

    return (
        <div>
            <h1>Bar-Management</h1>
            <section><Button variant={"secondary"} size={"lg"}><NavLink className={"link-name"} to={"/"}>Back</NavLink></Button></section>

            <section><Button variant={"priary"} size={"lg"}><ModalAddBar bar={bar} addBar={addBar}/></Button></section>
            <BarGallery bars={bars} deleteBar={deleteBar}/>

        </div>

    )
}