// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDogImage(data.message); // the API returns 
      });
  }, []); 
  //[] → making  sure thie fetch only runs once when the component mounts

  return (
    <div>
      
      {dogImage ? (
        <img src={dogImage} alt="A Random Dog" width="300" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;