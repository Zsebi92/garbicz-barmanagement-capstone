import AddBar from "../components/Bar/AddBar";
import UseBar from "../hooks/UseBar";
import Button from "react-bootstrap/Button";
import {NavLink} from "react-router-dom";
import React from "react";

export default function AddBarPage() {

    const {addBar} = UseBar()

    return(
        <div>
            <AddBar addBar={addBar}/>
            <section><Button variant={"secondary"} size={"lg"}><NavLink className={"link-name"} to={"/bar-management"}>Back</NavLink></Button></section>

        </div>
    )
}