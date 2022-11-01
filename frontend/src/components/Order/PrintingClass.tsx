import ReactToPrint from "react-to-print";
import React, {useEffect, useRef} from "react";



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
                    <table style={{width:"60%", border:'1px solid', margin:'auto'}}/>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Liter</th>
                        <th>Kisten</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Cola</td>
                        <td>0,2l</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Cola</td>
                        <td>0,33l</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Cola</td>
                        <td>0,5l</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Cola</td>
                        <td>0,75l</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Cola</td>
                        <td>1,0l</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Cola</td>
                        <td>1,5l</td>
                        <td>10</td>
                    </tr>
                    </tbody>

                </div>


        </div>
    )
}