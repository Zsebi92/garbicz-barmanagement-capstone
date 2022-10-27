import {NavLink} from "react-router-dom";
import React from "react";

export default function OrderManagement() {

    return (
        <div>
            <h1>Order-Management</h1>

            <section><button><NavLink to={"/"}>Back</NavLink></button></section>
        </div>
    )
}