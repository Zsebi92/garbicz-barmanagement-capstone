import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";

function App() {

  const [helloMessage, setHelloMessage] = useState("");

  useEffect(() => {
      fetchHelloMessage()
  }, [])

  fetchHelloMessage()

  function fetchHelloMessage(){
      axios.get("/api/hello")
          .then(response => response.data)
          .then(data => setHelloMessage(data))
          .catch((error) => console.log(error))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://tickets.garbiczfestival.com/uploads/garbicz_festival/image_asset_html_with_images_paragraph_image1/file/34/logo.png" className="App-logo" alt="logo" />
        <p>
          {helloMessage}
        </p>

      </header>
    </div>
  );
}

export default App;
