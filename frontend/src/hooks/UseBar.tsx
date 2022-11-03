import axios from "axios";
import {useEffect, useState} from "react";
import { toast } from "react-toastify";
import {Bar} from "../model/Bar";

export default function UseBar(){

    const [bars, setBars] = useState([])

    useEffect(() => {
        getAllBars()
    }, [])

    const getAllBars = () => {
        axios.get("/api/bars")
            .then(response => response.data)
            .then(data => setBars(data))
            .catch((error) => toast.error(error.message))
    }

    const addBar = (bar: Bar) => {
        axios.post("/api/bars", bar)
            .then(() => toast.success("Bar wurde erfolgreich angelegt"))
            .then(getAllBars)
            .catch((error) => toast.error(error.message))

    }

    const deleteBar = (id: string) => {
        axios.delete("/api/bars/" +id)
            .then(() => toast.success("Bar erfolgreich gelösch"))
            .then(getAllBars)
            .catch((error) => toast.error(error.message))

    }

    return {bars, addBar, getAllBars, deleteBar}
}