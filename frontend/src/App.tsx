import React from 'react';
import './App.css';
import ListingGallery from "./components/ListingGallery";
import useListing from "./hooks/useListing";
import AddListing from "./components/AddListing";


function App() {

    const {listings, getListingById, addListing, deleteListing, editListing} = useListing()


  return (
    <div className="App">
      <header className="App-header">
        <h1>Add Listing</h1>


          <ListingGallery listings={listings}/>
          <AddListing addListing={addListing}/>

      </header>
    </div>
  );
}

export default App;

