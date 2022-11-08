import {Order} from "../../model/Order";
import {FormEvent, useState} from "react";
import {toast} from "react-toastify";
import OrderCard from "./OrderCard";
import PrintingClass from "./PrintingClass";
import "./OrderGallery.css"

type OrderGalleryProps = {
    orders: Order[];
    addOrder: (addOrder: Order) => void;
    getAllOrder: () => void;
    deleteOrder: (id: string) => void;
}

export default function OrderGallery(props: OrderGalleryProps) {

    const [barName, setBarName] = useState("")
    const [listingName, setListingName] = useState("")
    const [listingSize, setListingSize] = useState("")
    const [quantity, setQuantity] = useState("")

    const onCreate = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(!barName || !listingName || !listingSize || !quantity) {
            toast.error("Bitte ALLES ausfüllen!")
            return
        }

        const newOrder: Order= {
            barName: barName,
            listingName: listingName,
            listingSize: listingSize,
            quantity: quantity
        }
        props.addOrder(newOrder)
    }

    return(
        <>
        <h1>Add Order</h1>
            <form onSubmit={(event) => onCreate(event)}>
                <input name={"barName"}
                       placeholder={"Barname"}
                       onChange={event => setBarName(event.target.value)}/>
                <input name={"listingName"}
                       placeholder={"Getränk"}
                       onChange={event => setListingName(event.target.value)}/>
                <input name={"listingSize"}
                       placeholder={"Liter"}
                       onChange={event => setListingSize(event.target.value)}/>
                <input name={"quantity"}
                       placeholder={"Menge"}
                       onChange={event => setQuantity(event.target.value)}/>
                <button type={"submit"}>Hinzufügen</button>
            </form>

            <div className={"cards"}>
                {props.orders.length === 0 ?
                <h1> Keine Bestellungen vorhanden </h1>
                :
                props.orders.map((o) =>
                <div key={o.id} className={"card"}>
                    <OrderCard order={o} deleteOrder={props.deleteOrder} />
                    <PrintingClass order={o}/>
                </div>)}
            </div>
        </>
    )
}