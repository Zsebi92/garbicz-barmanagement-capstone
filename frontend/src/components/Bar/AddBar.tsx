import {Bar} from "../../model/Bar";
import React, {FormEvent, useState} from "react";
import {toast} from "react-toastify";

type AddBarProps = {
    addBar: (addBar: Bar) => void;
}

export default function AddBar(props: AddBarProps) {

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
            name: name,
            location: location,
            description: description
        }

        props.addBar(newBar)

    }

    return (
        <div>
            <h1>Add Bar</h1>
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
                <button type={"submit"}>Hinzufügen</button>

            </form>
        </div>
    )
}