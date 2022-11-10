import {Order} from "../../model/Order";
import React, {FormEvent, useState} from "react";
import {toast} from "react-toastify";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

type ModalAddOrder = {
    addOrder: (addOrder: Order) => void;
    order: Order;
}

export default function ModalAddOrder(props: ModalAddOrder){

    const [order, setOrder] = useState(props.order)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [barName, setBarName] = useState("")
    const [listingName, setListingName] = useState("")
    const [listingSize, setListingSize] = useState("")
    const [quantity, setQuantity] = useState("")

    const onCreate = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!barName || !listingName || !listingSize || !quantity) {
            toast.error("Bitte ALLES ausfüllen!")
            return
        }

        const newOrder: Order = {
            barId: barName,
            listingNameId: listingName,
            listingSizeId: listingSize,
            quantityId: quantity
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
                        <input name={"name"}
                               placeholder={"Bar"}
                               onChange={event => setBarName(event.target.value)}/>
                        <input name={"liter"}
                               placeholder={"Listing"}
                               onChange={event => setListingName(event.target.value)}/>
                        <input name={"grossPurchase"}
                               placeholder={"Listing Size"}
                               onChange={event => setListingSize(event.target.value)}/>
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