import {NavLink} from "react-router-dom";
import React from "react";
import PrintingClass from "../components/Order/PrintingClass";


export default function OrderManagement() {

    return (
        <div>
            <h1>Order-Management</h1>
            <PrintingClass/>
            <section><button><NavLink to={"/"}>Back</NavLink></button></section>
        </div>
    )
}