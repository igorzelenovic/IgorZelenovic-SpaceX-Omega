import React, { useEffect } from "react";
import axios from "axios";

const AllCores = () => {
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/cores")
      .then((response) => {
        // Uspesno povuceni podaci
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error here by logging to console or displaying an error message to user.
        console.error(error.message);
        // Dodajte dodatnu logiku za prikazivanje poruke o grešci korisniku
      });
  }, []);

  return <div>Rendering AllCores component...</div>;
};

export default AllCores;
