import React, { useState } from "react";

function NewPlantForm({ handeAddPlants }) {
  const [plantForm, setNewPlant] = useState({
    "name" : "",
    "image" : "",
    "price" : "",
  })

  function handleFormChange(e){
    const key = e.target.name;
    const value = e.target.value;
    const newPlant = {...plantForm, [key]:value}
    // newPlant[key][value];
    setNewPlant(newPlant);
  }

  function handleSubmitForm(e){
    e.preventDefault();
    handeAddPlants(plantForm);
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmitForm}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleFormChange}/>
        <input type="text" name="image" placeholder="Image URL" onChange={handleFormChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleFormChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
