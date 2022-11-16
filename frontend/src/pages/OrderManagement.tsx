import {NavLink} from "react-router-dom";
import React from "react";
import OrderGallery from "../components/Order/OrderGallery";
import UseOrder from "../hooks/UseOrder";
import Button from "react-bootstrap/Button";
import ModalAddOrder from "../components/Modal/ModalAddOrder";




export default function OrderManagement() {

    const {order ,orders, bar, addOrder,deleteOrder} = UseOrder()

    return (
        <div>
            <h1>Order-Management</h1>

            <section><Button variant={"priary"} size={"lg"}><ModalAddOrder order={order} addOrder={addOrder}/></Button></section>
            <OrderGallery orders={orders} deleteOrder={deleteOrder}/>

            <section><Button variant={"secondary"} size={"lg"}><NavLink className={"link-name"} to={"/"}>Back</NavLink></Button></section>
        </div>
    )
}