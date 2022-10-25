import axios from "axios";
import {useEffect, useState} from "react";


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

    const addListing = (name: string, liter: string) => {
        let newListing = {
            name: name,
            liter: liter
        }

        axios.post("/api/listings", newListing)
            .then(getAllListings)
    }

    return {listings, addListing}
}