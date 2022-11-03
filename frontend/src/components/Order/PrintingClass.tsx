import ReactToPrint from "react-to-print";
import React, {useEffect, useRef} from "react";
import {Order} from "../../model/Order";

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
            trigger={() => <button>Print</button>}
            content={() => componentRef.current}
            />
            <div ref={componentRef}>
                    <table style={{width:"60%", border:'1px solid', margin:'auto'}}/>
                    <thead> Order: {props.order.id}
                    <tr>
                        <th>No</th>
                        <th>Barname</th>
                        <th>Getränk</th>
                        <th>Größe</th>
                        <th>Menge in Kisten</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>{props.order.barName}</td>
                        <td>{props.order.listingName}</td>
                        <td>{props.order.listingSize}</td>
                        <td>{props.order.quantity}</td>
                    </tr>
                    </tbody>

                </div>


        </div>
    )
}