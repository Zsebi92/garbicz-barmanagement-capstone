import {Bar} from "../../model/Bar";
import React, {FormEvent, useState} from "react";
import BarCard from "./BarCard";


type BarGalleryProps = {
    bars: Bar[];
    addBar: (addBar: Bar) => void;
    getAllBars: () => void;
    deleteBar: (id: string) => void;
}

export default function BarGallery(props: BarGalleryProps) {



    return (
        <>

            <div className={"cards"}>
                {props.bars.length === 0 ?
                    <h1> Keine Bars vorhanden </h1>
                    :
                    props.bars.map((b) =>
                        <div key={b.id} className={"card"}>
                            <BarCard bar={b}  deleteBar={props.deleteBar}/>
                        </div>)}
            </div>
        </>
    )
}