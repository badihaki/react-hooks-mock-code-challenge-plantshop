import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, handeAddPlants}) {
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <main>
      <NewPlantForm handeAddPlants={handeAddPlants} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PlantList plants={plants} searchTerm={searchTerm} />
    </main>
  );
}

export default PlantPage;
