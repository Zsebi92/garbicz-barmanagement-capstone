import axios from "axios";
import {useEffect, useState} from "react";
import { toast } from "react-toastify";
import {Bar} from "../model/Bar";

export default function UseBar(){

    const [bars, setBars] = useState([])

    let bar!: Bar;


    useEffect(() => {
        getAllBars()
    }, [])

    const getAllBars = () => {
        axios.get("/api/bars")
            .then(response => response.data)
            .then(bars => setBars(bars))
            .catch((error) => toast.error(error.message))
    }

    const addBar = (bar: Bar) => {
        axios.post("/api/bars", bar)
            .then(() => toast.success("Bar wurde erfolgreich angelegt"))
            .catch((error) => toast.error(error.message))
            .then(getAllBars)

    }

    const updateBar = (bar : Bar) => {
        axios.put("/api/bars" + bar)
            .then(getAllBars)
            .then(() => toast.success("Bar wurde geändert"))
            .catch((error) => toast.error(error.message))
            .then(getAllBars)
    }

    const deleteBar = (id: string) => {
        axios.delete("/api/bars/" +id)
            .then(() => toast.success("Bar erfolgreich gelösch"))
            .then(getAllBars)
            .catch((error) => toast.error(error.message))

    }

    return {bar, bars, addBar, getAllBars, updateBar ,deleteBar}
}