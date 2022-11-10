import {Order} from "../../model/Order";
import "./OrderCard.css"
import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";


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
            <Card className="text-center">
                <Card.Header>Order ID: {props.order.id}</Card.Header>
                <Card.Body>
                    <Card.Title>Bar: {props.order.barId} | Getränk: {props.order.listingId}</Card.Title>
                    <Card.Text> Menge: {props.order.quantity}</Card.Text>
            <Button variant={"primary"} onClick={deleteHandler}>Löschen</Button>
                    </Card.Body>
            </Card>
        </div>
    )
}