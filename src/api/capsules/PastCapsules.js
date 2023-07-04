import React, { useEffect } from "react";
import axios from "axios";

const PastCapsules = () => {
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/capsules/past")
      .then((response) => {
        // Uspesno povuceni podaci
        console.log(response.data);
      })
      .catch((error) => {
        // Greska prilikom povlacenja podataka
        console.error(error.message);
      });
  }, []);

  return <div>Rendering PastCapsules component...</div>;
};

export default PastCapsules;
