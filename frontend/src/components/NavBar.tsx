import {NavLink} from "react-router-dom";
import React from "react";

export default function NavBar() {
    return (
        <div>
            <section>
                <button>
                    <NavLink to={"/inventory"}>Inventory</NavLink>
                </button>
            </section>

            <section>
                <button>
                    <NavLink to={"/bar-management"}>Bar-Management</NavLink>
                </button>
            </section>

            <section>
                <button>
                    <NavLink to={"/order-management"}>Order-Management</NavLink>
                </button>
            </section>

            <section>
                <button>
                    <NavLink to={"/staff-management"}>Staff-Management</NavLink>
                </button>
            </section>
        </div>
    )
}