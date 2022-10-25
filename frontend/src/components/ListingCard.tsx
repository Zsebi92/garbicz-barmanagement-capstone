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
        </div>
    )
}