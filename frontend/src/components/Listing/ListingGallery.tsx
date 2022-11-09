import {Listing} from "../../model/Listing";
import ListingCard from "./ListingCard";
import "./ListingGallery.css";
import React, {FormEvent, useState} from "react";


type ListingGalleryProps = {
    listings: Listing [];
    deleteListing: (id: string) => void;
}

export default function ListingGallery(props: ListingGalleryProps) {

    return (
        <>
            <div className={"cards"}>
                {props.listings.length === 0 ?
                    <h1> Keine Getränke vorhanden </h1>
                    :
                    props.listings.map((m) =>
                        <div key={m.id} className={"card"}>
                            <ListingCard listing={m} deleteListing={props.deleteListing}/>
                        </div>)}
            </div>
        </>
    )
}