import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
   const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
  fetch(" http://localhost:6001/plants")
    .then((response) => response.json())
    .then((allPlants) => setPlants(allPlants));
}, []);

function updateSearchTerm(searchValue) {
  setSearchTerm(searchValue);
}

const filteredPlants = plants.filter((plant) => {
  const lowerCaseName = plant.name.toLowerCase();
  const lowerCaseSearch = searchTerm.toLowerCase();
  const numPriceSearch = parseInt(searchTerm);
  const isPrice = plant.price <= numPriceSearch;
  return lowerCaseName.includes(lowerCaseSearch) || isPrice
});

  return (
    <main>
      <NewPlantForm />
      <Search
      searchTerm={searchTerm}
       updateSearchTerm={updateSearchTerm}
      />
      <PlantList
      plants={filteredPlants}
      />
    </main>
  );
}

export default PlantPage;
