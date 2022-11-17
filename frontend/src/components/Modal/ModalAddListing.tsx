import React, {FormEvent, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {toast} from "react-toastify";
import {Listing} from "../../model/Listing";

type ModalAddListing = {
    addListing: (addListing: Listing) => void;
    listing: Listing

};

export default function ModalAddListing(props: ModalAddListing) {

    const [listing, setListing] = useState(props.listing)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState("")
    const [liter, setliter] = useState("")
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
            name,
            liter,
            grossPurchase,
            purchaseNet,
            bottlesPerBox,
            boxes,
            pallets
        }

        setListing(newListing);
        if(newListing) {
            props.addListing(newListing)
        }
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Listing
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Listing</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(event) => onCreate(event)}>
                    <input name={"name"}
                           placeholder={"Name"}
                           onChange={event => setName(event.target.value)}/>
                    <input name={"liter"}
                            placeholder={"liter"}
                            onChange={event => setliter(event.target.value)}/>
                    <input name={"grossPurchase"}
                           placeholder={"Gross purchase"}
                           onChange={event => setGrossPurchase(event.target.value)}/>
                    <input name={"purchaseNet"}
                           placeholder={"Purchase net"}
                           onChange={event => setPurchaseNet(event.target.value)}/>
                    <input name={"bottlesPerBox"}
                           placeholder={"Bottles / box"}
                           onChange={event => setBottlesPerBox(event.target.value)}/>
                    <input name={"boxes"}
                           placeholder={"Boxes"}
                           onChange={event => setBoxes(event.target.value)}/>
                    <input name={"pallets"}
                           placeholder={"Pallets"}
                           onChange={event => setPallets(event.target.value)}/>
                        <Button type={"submit"} onClick={handleClose}>Hinzufügen</Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Back
                        </Button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}