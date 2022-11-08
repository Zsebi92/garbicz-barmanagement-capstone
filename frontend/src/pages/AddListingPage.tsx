import UseListing from "../hooks/UseListing";
import AddListing from "../components/Listing/AddListing";
import Button from "react-bootstrap/Button";
import {NavLink} from "react-router-dom";
import React from "react";

export default function AddListingPage(){

    const {addListing} = UseListing()

    return(
        <div>
            <AddListing addListing={addListing}/>

            <section><Button variant={"secondary"} size={"lg"}><NavLink className={"link-name"} to={"/inventory"}>Back</NavLink></Button></section>

        </div>
    )
}