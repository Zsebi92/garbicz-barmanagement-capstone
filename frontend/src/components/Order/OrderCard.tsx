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
                    <Button variant={"primary"} onClick={deleteHandler}>Löschen</Button>
            </Card>
        </div>
    )
}