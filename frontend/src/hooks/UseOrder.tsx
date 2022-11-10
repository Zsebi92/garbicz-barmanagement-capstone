import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {Order} from "../model/Order";


export default function UseOrder(){

    const [orders, setOrder] = useState([])
    const [bars, setBars] = useState([])

    let order!: Order;

    useEffect(() => {
        getAllOrders()
    }, [])

    const getAllOrders = () => {
        axios.get("/api/orders")
            .then(response => response.data)
            .then(orders => setOrder(orders))
            .catch((error) => toast.error(error.message))
    }

    const getAllBars = () => {
        axios.get("/api/bars")
            .then(response => response.data)
            .then(bars => setBars(bars))
            .catch((error) => toast.error(error.message))
    }


    const addOrder = (order: Order) => {
        axios.post("/api/orders", order)
            .then(() => toast.success("Order wurde erfolgreich angelegt!"))
            .catch((error) => toast.error(error.message))
            .then (getAllOrders)
    }

    const deleteOrder = (id:string) => {
        axios.delete("/api/orders/" + id)
            .then(() => toast.success("Order wurde erfolgreich gelöscht"))
            .catch((error) => toast.error(error.message))
            .then(getAllOrders)
    }

    return {order ,orders, getAllOrders, getAllBars, addOrder, deleteOrder}
}