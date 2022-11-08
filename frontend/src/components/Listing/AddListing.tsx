import {Listing} from "../../model/Listing";
import React, {FormEvent, useState} from "react";
import {toast} from "react-toastify";
import {Button, NavLink} from "react-bootstrap";
import {Link} from "react-router-dom";

type AddListingProps = {
    addListing: (addListing: Listing) => void;
}

export default function AddListing(props: AddListingProps){

    const [name, setName] = useState("")
    const [liter, setLiter] = useState("")
    const [grossPurchase, setGrossPurchase] = useState("")
    const [purchaseNet, setPurchaseNet] = useState("")
    const [bottlesPerBox, setBottlesPerBox] = useState("")
    const [boxes, setBoxes] = useState("")
    const [pallets, setPallets] = useState("")

    const onCreate = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!name || !liter || !grossPurchase || !purchaseNet || !bottlesPerBox || !boxes || !pallets) {
            toast.error("Bitte ALLES ausfüllen!")
            return
        }

        const newListing: Listing = {
            name: name,
            liter: liter,
            grossPurchase: grossPurchase,
            purchaseNet: purchaseNet,
            bottlesPerBox: bottlesPerBox,
            boxes: boxes,
            pallets: pallets
        }

        props.addListing(newListing)
    }

    return (
        <div>
            <h1>Add Listing</h1>
            <form onSubmit={(event) => onCreate(event)}>
                <input name={"name"}
                       placeholder={"Name"}
                       onChange={event => setName(event.target.value)}/>
                <input name={"liter"}
                       placeholder={"Liter"}
                       onChange={event => setLiter(event.target.value)}/>
                <input name={"grossPurchase"}
                       placeholder={"EKB"}
                       onChange={event => setGrossPurchase(event.target.value)}/>
                <input name={"purchaseNet"}
                       placeholder={"EKN"}
                       onChange={event => setPurchaseNet(event.target.value)}/>
                <input name={"bottlesPerBox"}
                       placeholder={"Flaschen/Kiste"}
                       onChange={event => setBottlesPerBox(event.target.value)}/>
                <input name={"boxes"}
                       placeholder={"Kisten"}
                       onChange={event => setBoxes(event.target.value)}/>
                <input name={"pallets"}
                       placeholder={"Paletten"}
                       onChange={event => setPallets(event.target.value)}/>
                <Button type={"submit"}>Hinzufügen</Button>

            </form>
        </div>
    )
}