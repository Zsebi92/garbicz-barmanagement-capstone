import {Bar} from "../../model/Bar";
import React  from "react";
import BarCard from "./BarCard";
import {Table} from "react-bootstrap";


type BarGalleryProps = {
    bars: Bar[];
    deleteBar: (id: string) => void;
}

export default function BarGallery(props: BarGalleryProps) {

    return (
        <>

            <Table striped bordered hover variant={"light"} responsive>
                <thead>
                <tr>
                    <th>Bar name</th>
                    <th>Location</th>
                    <th>Description</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {props.bars.map((bar) =>
                    <tr key={bar.id}>
                        <td>{bar.name}</td>
                        <td>{bar.location}</td>
                        <td>{bar.description}</td>
                        <td><BarCard bar={bar} deleteBar={props.deleteBar}/></td>
                    </tr>)}
                </tbody>

            </Table>
        </>
    )
}