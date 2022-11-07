import {NavLink} from "react-router-dom";
import React from "react";
import OrderGallery from "../components/Order/OrderGallery";
import UseOrder from "../hooks/UseOrder";
import Button from "react-bootstrap/Button";


export default function OrderManagement() {

    const {order, addOrder, getAllOrders, deleteOrder} = UseOrder()

    return (
        <div>
            <h1>Order-Management</h1>
            <OrderGallery orders={order} addOrder={addOrder} getAllOrder={getAllOrders} deleteOrder={deleteOrder}/>
            <section><Button variant={"secondary"} size={"lg"}><NavLink className={"link-name"} to={"/"}>Back</NavLink></Button></section>
        </div>
    )
}