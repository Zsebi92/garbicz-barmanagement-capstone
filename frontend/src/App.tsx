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
        <img src="https://garbiczfestival.com/files/garbicz_logo_110x115_hover2x.png" className="App-logo" alt="logo" />
        <p>
          {helloMessage}
        </p>

      </header>
    </div>
  );
}

export default App;
