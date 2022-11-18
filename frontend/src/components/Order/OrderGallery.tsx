import {Order} from "../../model/Order";
import OrderCard from "./OrderCard";
import PrintingClass from "./PrintingClass";
import "./OrderGallery.css"
import {Table} from "react-bootstrap";
import ReactToPrint from "react-to-print";


type OrderGalleryProps = {
    orders: Order [];
    deleteOrder: (id: string) => void;

}

export default function OrderGallery(props: OrderGalleryProps) {

    return (
        <>
            <Table striped bordered hover variant={"light"} responsive>
            <thead>
            <tr>
                <th>OrderId</th>
                <th>Bar</th>
                <th>Listing</th>
                <th>Quantity</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {props.orders.map((order) =>
            <tr>
                <td>{order.id}</td>
                <td>{order.barName}</td>
                <td>{order.listingName}</td>
                <td>{order.quantity}</td>
                <td><PrintingClass order={order}/><OrderCard order={order} deleteOrder={props.deleteOrder}/></td>
            </tr>)}
            </tbody>

            </Table>
        </>
    )
}