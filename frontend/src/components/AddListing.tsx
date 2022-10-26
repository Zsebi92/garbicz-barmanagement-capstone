
import {ChangeEvent, useState} from "react";

type AddListingProps = {
    addListing: (name: string, liter: string, grossPurchase: string, purchaseNet: string) => void
}

export default function AddListing(props: AddListingProps) {

    const [name, setName] = useState("")
    const [liter, setLiter] = useState("")
    const [grossPurchase, setGrossPurchase] = useState("")
    const [purchaseNet, setPurchaseNet] = useState("")

    const nameOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }
    const literOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setLiter(event.target.value)
    }
    const grossPurchaseOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setGrossPurchase(event.target.value)
    }
    const purchaseNetOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPurchaseNet(event.target.value)
    }


    return(
        <div className={"input-field"}>


            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Name </span>
                <input onChange={nameOnChange} value={name} type="text" className="form-control" aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-default"/>
            </div>

            <select onChange={literOnChange} value={liter} className="form-select" aria-label="Default select example">
                <option selected>Flaschen Inhalt in Liter</option>
                <option value="0,2l">0,2l</option>
                <option value="0,33l">0,33l</option>
                <option value="0,5l">0,5l</option>
                <option value="0,75l">0,75l</option>
                <option value="1,0l">1,0l</option>
                <option value="1,5l">1,5l</option>
            </select>

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


            <button onClick={() => props.addListing(name, liter, grossPurchase, purchaseNet)}>Add</button>

        </div>
    )
}