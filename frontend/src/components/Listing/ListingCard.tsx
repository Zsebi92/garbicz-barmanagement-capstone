import {Listing} from "../../model/Listing";
import "./ListingCard.css"
import Button from "react-bootstrap/Button";


type ListingCardProps = {
    listing: Listing
    deleteListing: (id: string) => void;
}

export default function ListingCard(props: ListingCardProps) {

    const deleteHandler = () => {
        if (props.listing.id === undefined) {
            return null;
        }
        props.deleteListing(props.listing.id);
    }

    return (
        <div className={"listing-card"}>
            <Button variant={"primary"} onClick={deleteHandler}>Delete</Button>

        </div>
    )
}