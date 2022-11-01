import ReactToPrint from "react-to-print";
import React, {useEffect, useRef} from "react";
import {Listing} from "../../model/Listing";
import {Bar} from "../../model/Bar";


export default function PrintingClass() {

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

            </div>
        </div>
    )
}