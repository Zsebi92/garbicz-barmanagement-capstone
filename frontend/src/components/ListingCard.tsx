import {Listing} from "../model/Listing";
import "../components/ListingCard.css"


type ListingCardProps = {
    listing: Listing;
}

export default function ListingCard(props: ListingCardProps) {
    return(
        <div className={"listing-card"}>
            <h3>{props.listing.name}</h3>
            <h4>{props.listing.liter}</h4>


            <h4>{props.listing.grossPurchase}</h4>
            <h4>{props.listing.purchaseNet}</h4>
            <h4>{props.listing.bottlesPerBox}</h4>
            <h4>{props.listing.boxes}</h4>
            <h4>{props.listing.pallets}</h4>

        </div>
    )
}