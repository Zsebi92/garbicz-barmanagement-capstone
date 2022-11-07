import React from "react";
import NavBar from "../components/Navigation/NavBar";
import "../pages/AdminOverview.css"


export default function AdminOverview() {

    return (
        <div>
            <header>
                <img
                    src="https://tickets.garbiczfestival.com/uploads/garbicz_festival/image_asset_html_with_images_paragraph_image1/file/34/logo.png"
                    className={"logo"} alt={"Logo"}/>
                <h1>AdminOverview</h1>
            </header>

            <body>
            <NavBar/>
            </body>


        </div>

    )
}