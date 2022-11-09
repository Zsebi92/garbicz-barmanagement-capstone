import {Bar} from "../../model/Bar";
import React, {FormEvent, useState} from "react";
import {toast} from "react-toastify";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

type AddBarProps = {
    addBar: (addBar: Bar) => void;
    bar: Bar
}

export default function ModalAddBar(props: AddBarProps) {

    const [bar, setBar] = useState(props.bar)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [description, setDescription] = useState("")

    const onCreate = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!name || !location || !description) {
            toast.error("Bitte ALLES ausfüllen!")
            return
        }


        const newBar: Bar = {
            name,
            location,
            description
        }

        setBar(newBar);
        if (newBar) {
            props.addBar(newBar)
        }

    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Bar
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Bar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(event) => onCreate(event)}>
                        <input name={"name"}
                               placeholder={"Name"}
                               onChange={event => setName(event.target.value)}/>
                        <input name={"location"}
                               placeholder={"Ort"}
                               onChange={event => setLocation(event.target.value)}/>
                        <input name={"description"}
                               placeholder={"Beschreibung"}
                               onChange={event => setDescription(event.target.value)}/>
                        <Button type={"submit"} onClick={handleClose}>Hinzufügen</Button>
                        <Button variant="secondary" onClick={handleClose}>Back</Button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}