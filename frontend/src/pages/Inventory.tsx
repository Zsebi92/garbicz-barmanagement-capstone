import ListingGallery from "../components/Listing/ListingGallery";
import React from "react";
import UseListing from "../hooks/UseListing";
import {NavLink} from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Inventory() {

    const {listings, getAllListings, addListing ,deleteListing} = UseListing()

    return (
        <div>
            <h1>Inventory</h1>

            <ListingGallery listings={listings} getAllListings={getAllListings} addListing={addListing} deleteListing={deleteListing} />

            <section><Button variant={"secondary"} size={"lg"}><NavLink className={"link-name"}  to={"/"}>Back</NavLink></Button></section>

        </div>
    )
}