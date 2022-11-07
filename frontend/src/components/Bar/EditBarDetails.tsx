import {Bar} from "../../model/Bar";
import React, {FormEvent, useState} from "react";


type ShowBarDetailsProps= {
    bar: Bar
    updateBar: (updateBar: Bar) => void
}

export default function EditBarDetails(props: ShowBarDetailsProps) {

    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [description, setDescription] = useState("")


    const saveBar = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const updateBar = {
            id: props.bar.id,
            name,
            location,
            description
        }
        props.updateBar(updateBar)
    }

    return (
        <div>
            <h1>Edit Bar</h1>
            <form onSubmit={saveBar}>
                <input name={"name"}
                       placeholder={"Name"}
                       onChange={event => setName(event.target.value)}/>
                <input name={"location"}
                       placeholder={"Ort"}
                       onChange={event => setLocation(event.target.value)}/>
                <input name={"description"}
                       placeholder={"Beschreibung"}
                       onChange={event => setDescription(event.target.value)}/>
                <button type={"submit"}>Speicher</button>

            </form>
        </div>
    )
}