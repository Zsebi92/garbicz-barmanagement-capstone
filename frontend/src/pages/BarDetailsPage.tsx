import { Bar } from "../model/Bar"
import UseDetailedBar from "../hooks/UseDetailedBar";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import EditBarDetails from "../components/Bar/EditBarDetails";


type BarDetailsPageProps = {

    updateBar: (updateBar : Bar) => void
    deleteBar: (id: string) => void
}

export default function BarDetailsPage(props: BarDetailsPageProps) {

    const {loadDetailedBar, detailedBar} = UseDetailedBar();

    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        if (id) {
            loadDetailedBar(id)
        }
    }, [id])

    const onUpdateBar = (bar: Bar) => {
        props.updateBar(bar)
        navigate("/bar-management")
    }

    const onDelete = (id: string) => {
        props.deleteBar(id)
        navigate("/bar-management")
    }

    return(

        <div className={"bar-details"}>
            <h2>Edit Bar</h2>

            <EditBarDetails bar={detailedBar} updateBar={onUpdateBar}/>

            {id &&
                <button onClick={() => onDelete}>Löschen</button>}

            <button onClick={() => navigate("/bar-management")}>Zurück</button>

        </div>
    )
}