import {Listing} from "../../model/Listing";
import "./ListingGallery.css";
import React from "react";
import Table from 'react-bootstrap/Table';
import ListingCard from "./ListingCard";


type ListingGalleryProps = {
    listings: Listing [];
    deleteListing: (id: string) => void;
}

export default function ListingGallery(props: ListingGalleryProps) {

    return (
        <>
            <Table className={"table-listing"} striped bordered hover variant={"light"} responsive={"lg"}>
                <thead>
                <tr className={"table-header"}>
                    <th>Drink</th>
                    <th>Drinksize</th>
                    <th>Gross purchase</th>
                    <th>Purchase net</th>
                    <th>Bottles / box</th>
                    <th>Boxes</th>
                    <th>Pallets</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {props.listings.map((listing) =>
                <tr key={listing.id}>
                    <td>{listing.name}</td>
                    <td>{listing.liter}</td>
                    <td>{listing.grossPurchase}</td>
                    <td>{listing.purchaseNet}</td>
                    <td>{listing.bottlesPerBox}</td>
                    <td>{listing.boxes}</td>
                    <td>{listing.pallets}</td>
                    <td><ListingCard listing={listing} deleteListing={props.deleteListing}/></td>
                </tr>)}
                </tbody>

            </Table>

        </>
    )
}