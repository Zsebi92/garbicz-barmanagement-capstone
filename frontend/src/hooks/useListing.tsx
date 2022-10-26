import axios from "axios";
import {useEffect, useState} from "react";
import {Listing} from "../model/Listing";


export default function useListing(){
    const [listings, setAllListings] = useState([]);

    useEffect(()=> {
        getAllListings();
    }, [])

    const getAllListings = () => {
        axios.get("/api/listings")
            .then((response) => response.data)
            .then((listings) => setAllListings(listings))
    }

    const getListingById = (id: string) => {
        axios.get("/api/listings/${id}")
            .then(response => response.data)
    }

    const addListing = (name: string, liter: string, grossPurchase: string, purchaseNet: string, bottlesPerBox: string, boxes: string, pallets: string) => {
        let newListing = {
            name: name,
            liter: liter,
            grossPurchase: grossPurchase,
            purchaseNet: purchaseNet,
            bottlesPerBox: bottlesPerBox,
            boxes: boxes,
            pallets: pallets
        }

        axios.post("/api/listings", newListing)
            .then(getAllListings)
    }

    const deleteListing = (id: string, listing: Listing) => {
        axios.delete("/api/listings/${id}" +id)
            .then(getAllListings)
            .catch(error => error)
    }

    const editListing = (id: string, listing: Listing) => {
        axios.put("/api/listings/${id}", listing)
            .then(getAllListings)
            .catch(error => error)
    }

    return {listings, getListingById, addListing, deleteListing, editListing}
}