import {useState} from "react";
import {Bar} from "../model/Bar";
import axios from "axios";
import {toast} from "react-toastify";


export default function UseDetailedBar() {

    const [detailedBar, setDetailedBar] = useState<Bar>({id:"",name:"",location:"",description:""})

    const loadDetailedBar = (id: string) => {
        axios.get("/api/bars/" + id)
            .then(response => response.data)
            .then(bar => setDetailedBar(bar))
            .catch((error) => toast.error(error.response.data))
    }

    return  {loadDetailedBar, detailedBar}
}