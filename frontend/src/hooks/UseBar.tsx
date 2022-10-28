import axios from "axios";
import {useEffect, useState} from "react";
import { toast } from "react-toastify";
import {Bar} from "../model/Bar";

export default function useBar(){

    const [bar, setBar] = useState([])

    useEffect(() => {
        getAllBars()
    }, [])

    const getAllBars = () => {
        axios.get("/api/bars")
            .then(response => response.data)
            .then(data => setBar(data))
            .catch((error) => toast.error(error.message))
    }

    const addBar = (bar: Bar) => {
        axios.post("/api/bars", bar)
            .then(() => toast.success("Bar wurde erfolgreich angelegt"))
            .catch((error) => toast.error(error.message))
            .then(getAllBars)
    }

    const deleteBar = (id: string) => {
        axios.delete("/api/bars" +id)
            .then(() => toast.success("Bar erfolgreich gelösch"))
            .catch((error) => toast.error(error.message))
            .then(getAllBars)
    }

    return {bar, getAllBars, addBar, deleteBar}
}