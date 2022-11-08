import axios from "axios";
import {useEffect, useState} from "react";
import {Listing} from "../model/Listing";
import {toast} from "react-toastify";


export default function UseListing(){

    const [listings, setListings] = useState([])

    let listing!: Listing;

    useEffect(() => {
        getAllListings()
    }, [])

    const getAllListings = () => {
        axios.get("/api/listings")
            .then(response => response.data)
            .then(listings => setListings(listings))
            .catch((error) => toast.error(error.message))
    }

    const addListing = (listing: Listing) => {
        axios.post("/api/listings", listing)
            .then(() => toast.success("Getränk wurde erfolgreich angelegt!"))
            .catch((error) => toast.error(error.message))
            .then(getAllListings)
    }



    const deleteListing = (id: string) => {
        axios.delete("/api/listings/" +id)
            .then(() => toast.success("Getränk erfolgreich gelöscht"))
            .catch((error) => toast.error(error.message))
            .then(getAllListings)
    }

    return {listing, listings, getAllListings, addListing, deleteListing }

}