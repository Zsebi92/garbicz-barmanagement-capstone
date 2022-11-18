import {Order} from "../../model/Order";
import OrderCard from "./OrderCard";
import PrintingClass from "./PrintingClass";
import "./OrderGallery.css"
import {Table} from "react-bootstrap";
import {useState} from "react";
import Button from "react-bootstrap/Button";


type OrderGalleryProps = {
    orders: Order [];
    deleteOrder: (id: string) => void;

}



export default function OrderGallery(props: OrderGalleryProps) {

    const [show, setShow] = useState(false);

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
                <td><OrderCard order={order} deleteOrder={props.deleteOrder}/><Button variant={"primary"} onClick={() => {setShow(!show)}}>{show?"Hide Order": "Show Order"}</Button>

                    {show && <PrintingClass order={order}/>}</td>

            </tr>)}
            </tbody>

            </Table>
        </>
    )
}