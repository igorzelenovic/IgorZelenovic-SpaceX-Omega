import React, { useEffect } from "react";
import axios from "axios";

const UpcomingCapsules = () => {
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/capsules/upcoming")
      .then((response) => {
        // Uspesno povuceni podaci
        console.log(response.data);
      })
      .catch((error) => {
        // Greska prilikom povlacenja podataka
        console.error(error.message);
      });
  }, []);

  return <div>Rendering UpcomingCapsules component...</div>;
};

export default UpcomingCapsules;
