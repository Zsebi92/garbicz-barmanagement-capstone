import {Listing} from "../../model/Listing";
import ListingCard from "./ListingCard";
import "./ListingGallery.css";
import React, {FormEvent, useState} from "react";
import {Table} from "react-bootstrap";


type ListingGalleryProps = {
    listings: Listing [];
    deleteListing: (id: string) => void;
}

export default function ListingGallery(props: ListingGalleryProps) {

    return (
        <>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Getränk</th>
                    <th> Getränke-Größe</th>
                    <th> Einkaufs-Brutto</th>
                    <th> Einkaufs-Netto</th>
                    <th> Flaschen/Kiste</th>
                    <th> Kisten</th>
                    <th> Paletten</th>

                </tr>
                </thead>
                <tbody>
                {props.listings.map((listing) =>
                <tr>
                    <td>{listing.name}</td>
                    <td>{listing.liter}</td>
                    <td>{listing.grossPurchase}</td>
                    <td>{listing.purchaseNet}</td>
                    <td>{listing.bottlesPerBox}</td>
                    <td>{listing.boxes}</td>
                    <td>{listing.pallets}</td>
                </tr>)}
                </tbody>

            </Table>

        </>
    )
}