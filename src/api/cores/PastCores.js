import React, { useEffect } from "react";
import axios from "axios";

const PastCores = () => {
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/cores/upcoming")
      .then((response) => {
        // Uspesno povuceni podaci
        console.log(response.data);
      })
      .catch((error) => {
        // Greska prilikom povlacenja podataka
        console.error(error.message);
      });
  }, []);

  return <div>Rendering PastCores component...</div>;
};

export default PastCores;
