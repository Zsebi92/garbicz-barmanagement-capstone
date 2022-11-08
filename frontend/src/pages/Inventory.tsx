import ListingGallery from "../components/Listing/ListingGallery";
import React from "react";
import UseListing from "../hooks/UseListing";
import {NavLink} from "react-router-dom";
import Button from "react-bootstrap/Button";
import ModalTest from "../components/Tests/ModalTest";

export default function Inventory() {

    const {listing, listings, addListing, deleteListing} = UseListing()


    return (
        <div>
            <h1>Inventory</h1>

            <section><Button variant={"priary"} size={"lg"}><ModalTest listing={listing} addListing={addListing}/></Button></section>
            <ListingGallery listings={listings} deleteListing={deleteListing} />

            <section><Button variant={"secondary"} size={"lg"}><NavLink className={"link-name"}  to={"/"}>Back</NavLink></Button></section>

        </div>
    )
}