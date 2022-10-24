import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import UseListings from "./hooks/UseListings";

export default function App() {

    const {listings, addListing, getListingById, editListing, deleteListing}  = UseListings();


  return (
    <div className="App">
      <header className="App-header">
        <img src="https://tickets.garbiczfestival.com/uploads/garbicz_festival/image_asset_html_with_images_paragraph_image1/file/34/logo.png" className="App-logo" alt="logo" />
        <p>
        </p>

      </header>
    </div>
  );
}

