import {Order} from "../../model/Order";
import "./OrderCard.css"


type OrderCardProps = {
    order: Order;
    deleteOrder: (id:string) => void;
}

export default function OrderCard(props:OrderCardProps) {

    const deleteHandler = () => {
        if (props.order.id === undefined) {
            return null;
        }
        props.deleteOrder(props.order.id);
    }

    return (
        <div className={"order-card"}>
            <p>Order ID: {props.order.id}</p>
            <p>Bar: {props.order.barName} | Getränk: {props.order.listingName}</p>
            <p>Liter: {props.order.listingSize} | Menge: {props.order.quantity}</p>
            <button onClick={deleteHandler}>Löschen</button>
        </div>
    )
}