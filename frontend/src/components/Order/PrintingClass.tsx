import ReactToPrint from "react-to-print";
import React, {useEffect, useRef} from "react";
import {Order} from "../../model/Order";
import Button from "react-bootstrap/Button";



export default function PrintingClass() {

    useEffect(() => {

    }, [])

    const componentRef = useRef<HTMLDivElement>(null)


    return (
        <div>
            <ReactToPrint
            trigger={() => <Button variant={"primary"}>Print</Button>}
            content={() => componentRef.current}
            />
            <div ref={componentRef}>

                </div>


        </div>
    )
}