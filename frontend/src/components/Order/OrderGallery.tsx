import {Order} from "../../model/Order";
import OrderCard from "./OrderCard";
import PrintingClass from "./PrintingClass";
import "./OrderGallery.css"


type OrderGalleryProps = {
    orders: Order [];
    deleteOrder: (id: string) => void;

}

export default function OrderGallery(props: OrderGalleryProps) {

    return (
        <>

            <div className={"cards"}>
                {props.orders.length === 0 ?
                    <h1> Keine Bestellungen vorhanden </h1>
                    :
                    props.orders.map((o) =>
                        <div key={o.id} className={"card"}>
                            <OrderCard  order={o} deleteOrder={props.deleteOrder}/>
                            <PrintingClass order={o}/>
                        </div>)}
            </div>
        </>
    )
}