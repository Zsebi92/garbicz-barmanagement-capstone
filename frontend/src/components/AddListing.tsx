
import {ChangeEvent, useState} from "react";

type AddListingProps = {
    addListing: (name: string, liter: string, grossPurchase: string, purchaseNet: string, bottlesPerBox: string, boxes: string, pallets: string ) => void
}

export default function AddListing(props: AddListingProps) {

    const [name, setName] = useState("")
    const [liter, setLiter] = useState("")
    const [grossPurchase, setGrossPurchase] = useState("")
    const [purchaseNet, setPurchaseNet] = useState("")
    const [bottlesPerBox, setBottlesPerBox] = useState("")
    const [boxes, setBoxes] = useState("")
    const [pallets, setPallets] = useState("")

    const nameOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }
    const literOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLiter(event.target.value)
    }
    const grossPurchaseOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setGrossPurchase(event.target.value)
    }
    const purchaseNetOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPurchaseNet(event.target.value)
    }
    const bottlesPerBoxOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setBottlesPerBox(event.target.value)
    }
    const boxesOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setBoxes(event.target.value)
    }
    const palletsOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPallets(event.target.value)
    }


    return(
        <div className={"input-field"}>


            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Name </span>
                <input onChange={nameOnChange} value={name} type="text" className="form-control" aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-default"/>
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Liter </span>
                <input onChange={literOnChange} value={liter} type="text" className="form-control" aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-default"/>
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">EKB/Kiste </span>
                <input onChange={grossPurchaseOnChange} value={grossPurchase} type="text" className="form-control" aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-default"/>
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">EKN/Kiste </span>
                <input onChange={purchaseNetOnChange} value={purchaseNet} type="text" className="form-control" aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-default"/>
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Flaschen/Kiste </span>
                <input onChange={bottlesPerBoxOnChange} value={bottlesPerBox} type="text" className="form-control" aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-default"/>
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Kisten </span>
                <input onChange={boxesOnChange} value={boxes} type="text" className="form-control" aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-default"/>
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Paletten </span>
                <input onChange={palletsOnChange} value={pallets} type="text" className="form-control" aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-default"/>
            </div>

            <button onClick={() => props.addListing(name, liter, grossPurchase, purchaseNet, bottlesPerBox, boxes, pallets)} type="button" className="btn btn-primary btn-lg">Add</button>


        </div>
    )
}