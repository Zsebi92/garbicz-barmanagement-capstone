import {Order} from "../../model/Order";
import React, {FormEvent, useState} from "react";
import {toast} from "react-toastify";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {Bar} from "../../model/Bar";
import {Listing} from "../../model/Listing";


type ModalAddOrder = {
    addOrder: (addOrder: Order) => void;
    order: Order;
    bars: Bar[];
    listings: Listing[];
}

export default function ModalAddOrder(props: ModalAddOrder){


    const [, setOrder] = useState(props.order)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [barName, setBarName] = useState("")
    const [listingName, setListingName] = useState("")
    const [quantity, setQuantity] = useState("")

    const onCreate = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if ( !barName || !listingName || !quantity) {
            toast.error("Bitte ALLES ausfüllen!")
            return
        }

        const newOrder: Order = {
            barName,
            listingName,
            quantity
        }

        setOrder(newOrder)
        if(newOrder) {
            props.addOrder(newOrder)
        }
    }

    const mapBars = () => {
        return props.bars.map((b) =>
            <option value={b.name}>{b.name}</option>)

    }

    const mapListingName = () => {
        return props.listings.map((l) =>
            <option value={l.name + l.liter}>{l.name + l.liter}</option>)
    }



    return(
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Order
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Order</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(event) => onCreate(event)}>

                        <select aria-label="Default select example" onChange={event => setBarName(event.target.value)}>
                        <option>Wählen Sie eine Bar aus</option>
                            {mapBars()}
                        </select>

                        <select aria-label="Default select example" onChange={event => setListingName(event.target.value)}>
                            <option>Wählen Sie ein Getränk aus</option>
                            {mapListingName()}
                        </select>

                        <input name={"quantity"}
                               placeholder={"Menge in Kisten "}
                               onChange={event => setQuantity(event.target.value)}/>


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