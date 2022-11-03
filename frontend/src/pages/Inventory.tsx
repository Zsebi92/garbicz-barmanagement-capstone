import ListingGallery from "../components/Listing/ListingGallery";
import React from "react";
import UseListing from "../hooks/UseListing";
import {NavLink} from "react-router-dom";

export default function Inventory() {

    const {listings, getAllListings, addListing ,deleteListing} = UseListing()

    return (
        <div>
            <h1>Inventory</h1>

            <ListingGallery listings={listings} getAllListings={getAllListings} addListing={addListing} deleteListing={deleteListing} />

            <section><button><NavLink to={"/"}>Back</NavLink></button></section>

        </div>
    )
}