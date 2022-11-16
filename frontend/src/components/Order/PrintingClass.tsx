import ReactToPrint from "react-to-print";
import React, {useEffect, useRef} from "react";
import {Order} from "../../model/Order";
import Button from "react-bootstrap/Button";

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

                </header>
            </div>


        </div>
    )
}