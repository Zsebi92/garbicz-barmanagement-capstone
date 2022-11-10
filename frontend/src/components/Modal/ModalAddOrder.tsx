import {Order} from "../../model/Order";
import React, {FormEvent, useState} from "react";
import {toast} from "react-toastify";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {Bar} from "../../model/Bar";


type ModalAddOrder = {
    addOrder: (addOrder: Order) => void;
    order: Order;
}

export default function ModalAddOrder(props: ModalAddOrder){

    const [order, setOrder] = useState(props.order)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [barId, setBarId] = useState("")
    const [barName, setBarName] = useState("")
    const [listingId, setListingId] = useState("")
    const [listingName, setListingName] = useState("")
    const [quantity, setQuantity] = useState("")

    const onCreate = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if ( !barName || !listingName || !quantity) {
            toast.error("Bitte ALLES ausfüllen!")
            return
        }

        const newOrder: Order = {
            barId: barId,
            barName: barName,
            listingId: listingId,
            listingName: listingName,
            quantity: quantity
        }

        setOrder(newOrder)
        if(newOrder) {
            props.addOrder(newOrder)
        }
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


                        <input name={"bar-name"}
                               placeholder={"Bar"}
                               onChange={event => setBarName(event.target.value)}/>
                        <input name={"listing-name"}
                               placeholder={"Listing"}
                               onChange={event => setListingName(event.target.value)}/>
                        <input name={"purchaseNet"}
                               placeholder={"Quantity"}
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