import {Bar} from "../../model/Bar";
import "./BarCard.css"
import Button from "react-bootstrap/Button";


type BarCardProps = {
    bar: Bar;
    deleteBar: (id: string) => void;
}

export default function BarCard(props: BarCardProps) {



    const deleteHandler = () => {
        if (props.bar.id === undefined) {
            return null
        }
        props.deleteBar(props.bar.id);
    }

    return (
        <div className={"bar-card"}>
            <Button variant={"primary"} onClick={deleteHandler}>Delete</Button>



        </div>

    )
}