import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const apiData = "http://localhost:6001/plants";
  
  const [plants, setPlants] = useState([]);

  useEffect(()=>{
    fetch(apiData).then( (r) =>r.json()).then(
      (data)=>{
        setPlants(data);
      }
    )
  }, [] )

  function handeAddPlants(newPlant){
    fetch(apiData, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(newPlant),
    }).then( (r) => r.json()).then((data) =>{
      setPlants([ ...plants, newPlant ])
    })
  }
  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} handeAddPlants={handeAddPlants} />
    </div>
  );
}

export default App;
