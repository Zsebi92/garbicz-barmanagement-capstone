import {useEffect, useState} from "react";
import axios from "axios";
import {Listing_Model} from "../model/Listing_Model";

export default function UseListings(){

    const  [listings, setListings] = useState([]);
    let listing: Listing_Model;


    useEffect(() => {
        getAllListings()
    }, [])

    const getAllListings= () => {
        axios.get("/api/inventory")
            .then(response => response.data)
            .then(data => setListings(data))

    }

    const addListing = (newListing: Listing_Model) => {
        return axios.post("/api/inventory", newListing)
            .then(response => response.data)
            .then(getAllListings)
    }

    const getListingById = (id: string) => {
        axios.get("/api/movie/${id}" +id)
            .then(response => response.data)
    }

    const editListing = (id: string) => {
        axios.put("/api/inventory/${id}", listing )
            .then(getAllListings)
    }

    function deleteListing(id: string) {
        return axios.delete("/api/inventory" + id)
            .then(getAllListings)

    }

    return{listings, addListing,getListingById,editListing, deleteListing}

}