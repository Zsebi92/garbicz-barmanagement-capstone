import {Listing} from "../../model/Listing";
import "./ListingCard.css"
import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";


type ListingCardProps = {
    listing: Listing;
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
            <Card className="text-center">
                <Card.Header>{props.listing.name} {props.listing.liter} |
                    EKN: {props.listing.purchaseNet} | Paletten: {props.listing.pallets} |
                    EKB: {props.listing.grossPurchase} | Kisten: {props.listing.boxes} |
                    Flaschen/Kiste: {props.listing.bottlesPerBox} <Button variant={"primary"} onClick={deleteHandler}>Löschen</Button></Card.Header>

            </Card>
        </div>
    )
}