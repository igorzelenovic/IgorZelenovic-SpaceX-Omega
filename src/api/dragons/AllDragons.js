import React, { useEffect } from "react";
import axios from "axios";

const AllDragons = () => {
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/dragons")
      .then((response) => {
        // Uspesno povuceni podaci
        console.log(response.data);
      })
      .catch((error) => {
        // Greska prilikom povlacenja podataka
        console.error(error.message);
      });
  }, []);

  return <div>Rendering AllDragons component...</div>;
};

export default AllDragons;
