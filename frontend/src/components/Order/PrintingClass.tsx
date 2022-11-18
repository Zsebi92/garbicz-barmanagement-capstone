import ReactToPrint from "react-to-print";
import React, {useEffect, useRef} from "react";
import {Order} from "../../model/Order";
import Button from "react-bootstrap/Button";
import "../Order/PrintincClass.css"
import Table from "react-bootstrap/esm/Table";

type PrintClassProps = {
    order: Order,
}

export default function PrintingClass(props: PrintClassProps) {

    useEffect(() => {

    }, [])

    const componentRef = useRef<HTMLDivElement>(null)



    return (
        <div>
            <ReactToPrint
            trigger={() => <Button variant={"primary"}>Print</Button>}
            content={() => componentRef.current}/>

            <div ref={componentRef}>
                <header>
                    <div className={"header"}>
                    <img
                        src="https://tickets.garbiczfestival.com/uploads/garbicz_festival/image_asset_html_with_images_paragraph_image1/file/34/logo.png"
                        className={"logo"} alt={"Logo"}/>

                    <section className={"order-id"}>
                        <h4>Order Id: {props.order.id}</h4>
                    </section>


                    </div>

                </header>
                <body>
                    <section className={"bar-name"}>
                        <h1>Lieferung an: {props.order.barName}</h1>
                    </section>

                    <div className={"table"}>
                    <Table className={"order"} striped bordered hover variant={"light"}>
                        <thead>
                        <tr>
                            <th>Getränk</th>
                            <th>Menge in Kisten</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                        <th>{props.order.listingName}</th>
                        <th>{props.order.quantity}</th>
                        </tr>
                        </tbody>
                    </Table>
                    </div>

                        <div className={"singing"}>
                        <section className={"signing-admin"}>
                            _____________________________
                            <h5>Unterschrift Lager</h5>
                        </section>

                        <section className={"signing-deliver"}>
                            _____________________________
                            <h5>Unterschrift Lieferant </h5>
                        </section>

                        <section className={"signing-deliver"}>
                            _____________________________
                            <h5>Unterschrift Bar </h5>
                        </section>
                        </div>



                </body>


            </div>


        </div>
    )
}