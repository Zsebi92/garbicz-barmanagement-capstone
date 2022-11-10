import {Bar} from "../../model/Bar";
import "./BarCard.css"
import {useNavigate} from "react-router-dom";
import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";

type BarCardProps = {
    bar: Bar;
    deleteBar: (id: string) => void;
}

export default function BarCard(props: BarCardProps) {

    const navigate = useNavigate()

    const deleteHandler = () => {
        if (props.bar.id === undefined) {
            return null
        }
        props.deleteBar(props.bar.id);
    }

    return (
        <div className={"bar-card"}>
                    <Button variant={"primary"}
                            onClick={() => navigate(`/bars/${props.bar.id}`)}>Bearbeiten</Button><Button variant={"primary"} onClick={deleteHandler}>Löschen</Button>


        </div>

    )
}