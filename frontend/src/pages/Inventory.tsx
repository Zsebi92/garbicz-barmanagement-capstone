import ListingGallery from "../components/Listing/ListingGallery";
import React from "react";
import UseListing from "../hooks/UseListing";
import {NavLink} from "react-router-dom";
import Button from "react-bootstrap/Button";
import ModalAddListing from "../components/Modal/ModalAddListing";

export default function Inventory() {

    const {listing, listings, addListing, deleteListing} = UseListing()


    return (
        <div>
            <h1>Inventory</h1>
            <section><Button variant={"secondary"} size={"lg"}><NavLink className={"link-name"}  to={"/"}>Back</NavLink></Button></section>
            <section><Button variant={"priary"} size={"lg"}><ModalAddListing listing={listing} addListing={addListing}/></Button></section>
            <ListingGallery listings={listings} deleteListing={deleteListing} />



        </div>
    )
}