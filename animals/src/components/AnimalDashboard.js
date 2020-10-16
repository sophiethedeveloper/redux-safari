import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import AnimalForm from "./AnimalForm.js";
import AnimalList from "./AnimalsList.js";

export default function AnimalDashboard() {
  const [animals, setAnimals] = useState([]);
  const [updating, setUpdating] = useState(false)

  // How can get fetch the data from the server when the component mounts?
  // How can we capture and set that data to state?

  useEffect(() => {
    axiosWithAuth()
      .get("/api/animals")
      .then((res) => {
        setAnimals(res.data);
      })
      .catch((err) => console.log("cannot display animals", err.response));
  }, [updating]);

  return (
    <div className="dash">
      <AnimalForm animals={animals} updateAnimals={setAnimals} setUpdating={setUpdating} updating={updating} />
      <AnimalList animals={animals} />
    </div>
  );
}
