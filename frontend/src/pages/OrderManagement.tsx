import {NavLink} from "react-router-dom";
import React from "react";
import OrderGallery from "../components/Order/OrderGallery";
import UseOrder from "../hooks/UseOrder";
import Button from "react-bootstrap/Button";
import ModalAddOrder from "../components/Modal/ModalAddOrder";
import UseBar from "../hooks/UseBar";
import UseListing from "../hooks/UseListing";






export default function OrderManagement() {

    const {order ,orders, addOrder,deleteOrder} = UseOrder()
    const {bars} = UseBar()
    const {listings} = UseListing()


    return (
        <div>
            <h1>Order-Management</h1>

            <section><Button variant={"secondary"} size={"lg"}><NavLink className={"link-name"} to={"/"}>Back</NavLink></Button></section>
            <section><Button variant={"priary"} size={"lg"}><ModalAddOrder listings={listings} bars={bars} order={order} addOrder={addOrder}/></Button></section>

            <OrderGallery orders={orders} deleteOrder={deleteOrder}/>



        </div>
    )
}