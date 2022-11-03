import {NavLink} from "react-router-dom";
import React from "react";
import PrintingClass from "../components/Order/PrintingClass";
import OrderGallery from "../components/Order/OrderGallery";
import UseOrder from "../hooks/UseOrder";


export default function OrderManagement() {

    const {order, addOrder, getAllOrders, deleteOrder} = UseOrder()

    return (
        <div>
            <h1>Order-Management</h1>
            <OrderGallery orders={order} addOrder={addOrder} getAllOrder={getAllOrders} deleteOrder={deleteOrder}/>
            <section><button><NavLink to={"/"}>Back</NavLink></button></section>
        </div>
    )
}