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

    const [barId, setBarId] = useState("")
    const [barName, setBarName] = useState("")
    const [listingId, setListingId] = useState("")
    const [listingName, setListingName] = useState("")

    const onCreate = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if ( !barName || !listingName) {
            toast.error("Bitte ALLES ausfüllen!")
            return
        }

        const newOrder: Order = {
            barId: barId,
            barName: barName,
            listingId: listingId,
            listingName: listingName,
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

                        <select aria-label="Default select example" onChange={event => setBarName(event.target.value)}>
                        <option>Wählen Sie eine Bar aus</option>
                        <option value="Weinbar">Weinbar</option>
                        </select>

                        <input name={"listing-name"}
                               placeholder={"Listing"}
                               onChange={event => setListingName(event.target.value)}/>

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