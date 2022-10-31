import {Bar} from "../../model/Bar";
import "./BarCard.css"

type BarCardProps = {
    bar: Bar;
    deleteBar: (id:string) => void;
}

export default function BarCard(props: BarCardProps){

    const deleteHandler = () => {
        if (props.bar.id === undefined){
            return null
        }
        props.deleteBar(props.bar.id);
    }

    return(
        <div className={"bar-card"}>
            <h2>{props.bar.name}</h2>
            <p>Ort: {props.bar.location}</p>
            <p>Beschreibung: {props.bar.description}</p>
            <button onClick={deleteHandler}>Löschen</button>

        </div>

    )
}