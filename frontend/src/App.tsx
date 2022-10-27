import React from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListingGallery from "./components/ListingGallery";
import useListing from "./hooks/useListing";


function App() {

    const {listings, getAllListings, addListing, deleteListing } = useListing()




  return (
    <div className="App">
        <ToastContainer position="top-right"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={true}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"/>
      <header className="App-header">
        <h1>Add Listing</h1>
          
          <ListingGallery listings={listings} getAllListings={getAllListings} addListing={addListing} deleteListing={deleteListing}/>


      </header>
    </div>
  );
}

export default App;

