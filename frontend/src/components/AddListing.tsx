
import {ChangeEvent, useState} from "react";

type AddListingProps = {
    addListing: (name: string, liter: string) => void
}

export default function AddListing(props: AddListingProps) {

    const [name, setName] = useState("")
    const [liter, setLiter] = useState("")

    const nameOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }
    const literOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLiter(event.target.value)
    }

    return(
        <div className={"search-bar"}>
            <input onChange={nameOnChange} value={name}/>
            <input onChange={literOnChange} value={liter}/>

            <button onClick={() => props.addListing(name, liter)}>Add</button>
        </div>
    )
}