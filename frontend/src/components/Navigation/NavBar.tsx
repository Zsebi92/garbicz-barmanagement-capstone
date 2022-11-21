import {NavLink} from "react-router-dom";
import React from "react";
import Button from 'react-bootstrap/Button';
import "./NavBar.css"

export default function NavBar() {
    return (
        <div className={"d-grid gap-2"}>
            <section>
                <Button variant={"primary"} size={"lg"}>
                    <NavLink className={"link-name"} to={"/inventory"}>Inventory</NavLink>
                </Button>
            </section>

            <section>
                <Button variant={"primary"} size={"lg"}>
                    <NavLink className={"link-name"} to={"/bar-management"}>Bar-Management</NavLink>
                </Button>
            </section>

            <section>
                <Button variant={"primary"} size={"lg"}>
                    <NavLink className={"link-name"} to={"/order-management"}>Order-Management</NavLink>
                </Button>
            </section>





        </div>
    )
}