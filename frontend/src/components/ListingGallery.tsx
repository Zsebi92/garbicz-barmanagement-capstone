import {Listing} from "../model/Listing";
import ListingCard from "./ListingCard";

type ListingGalleryProps = {
    listings: Listing [];
}

export default function ListingGallery(props: ListingGalleryProps) {
    return(
        <div className={"listing-gallery"}>
            {props.listings.map((listing) =>
            <ListingCard listing={listing}/>)}
        </div>
    )
}