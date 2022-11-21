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

    const [ ,setBar] = useState(props.bar)

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
        <div>

            <Button variant="primary" onClick={handleShow}>
                Add Bar
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal closeButton>
                    <Modal.Title>Add Bar</Modal.Title>
                </Modal>
                <Modal>

                    <form onSubmit={(event) => onCreate(event)}>
                        <input name={"name"}
                               placeholder={"Bar name"}
                               onChange={event => setName(event.target.value)}/>
                        <input name={"location"}
                               placeholder={"Location"}
                               onChange={event => setLocation(event.target.value)}/>
                        <input name={"description"}
                               placeholder={"Description"}
                               onChange={event => setDescription(event.target.value)}/>
                        <Button type={"submit"} onClick={handleClose}>Hinzufügen</Button>
                        <Button variant="secondary" onClick={handleClose}>Back</Button>
                    </form>
                </Modal>
            </Modal>
        </div>
    )
}