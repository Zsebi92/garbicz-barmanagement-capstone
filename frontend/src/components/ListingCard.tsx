import {Listing} from "../model/Listing";
import "../components/ListingCard.css"


type ListingCardProps = {
    listing: Listing;
}

export default function ListingCard(props: ListingCardProps) {
    return(
        <div className={"listing-card"}>

            <div className="card text-center">
                <div className="card-header">
                    {props.listing.name}  {props.listing.liter}
                </div>
                <div className="card-body">
                    <p className="gross-purchase">EKB: {props.listing.grossPurchase}</p>
                    <p className="purchase-net">EKB: {props.listing.purchaseNet}</p>
                    <p className="bottles-per-box">Flaschen/Kiste: {props.listing.bottlesPerBox}</p>
                    <p className="boxes">Kisten: {props.listing.boxes}</p>
                    <p className="pallets">Paletten: {props.listing.pallets}</p>

                </div>
                <div className="card-footer text-muted">
                    <a href="#" className="btn btn-primary">Top Up</a> <a href="#" className="btn btn-primary">Edit  </a>  <a href="#" className="btn btn-primary">Delete</a>
                </div>
            </div>




        </div>
    )
}