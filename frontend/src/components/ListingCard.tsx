import {Listing} from "../model/Listing";
import "../components/ListingCard.css"


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
        <div className={"movie-card"}>
            <button onClick={deleteHandler}>Delete</button>
            <p>{props.listing.name}</p>
            <p>{props.listing.liter} ({props.listing.grossPurchase}) ({props.listing.purchaseNet}) </p>
            <p>{props.listing.bottlesPerBox} ({props.listing.boxes}) ({props.listing.pallets}) </p>
        </div>
    )
}