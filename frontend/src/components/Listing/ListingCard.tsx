import {Listing} from "../../model/Listing";
import "./ListingCard.css"


type ListingCardProps = {
    listing: Listing;
    deleteListing: (id:string) => void;
}

export default function ListingCard(props: ListingCardProps) {

    const deleteHandler = () => {
        if (props.listing.id === undefined){
            return null;
        }
        props.deleteListing(props.listing.id);
    }

    return(
        <div className={"listing-card"}>
            <h2>{props.listing.name}  {props.listing.liter}</h2>
            <p>EKB: {props.listing.grossPurchase} |      Kisten: {props.listing.boxes} </p>
            <p>EKN: {props.listing.purchaseNet}  |       Paletten: {props.listing.pallets}  </p>
            <p>{props.listing.bottlesPerBox} Flaschen/Kiste   </p>
            <button onClick={deleteHandler}>Löschen</button>
        </div>
    )
}