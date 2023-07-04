import React, { useEffect } from "react";
import axios from "axios";

const OneCapsule = () => {
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/capsules/C112")
      .then((response) => {
        // Uspesno povuceni podaci
        console.log(response.data);
      })
      .catch((error) => {
        // Greska prilikom povlacenja podataka
        console.error(error.message);
      });
  }, []);

  return <div>Rendering OneCapsule component...</div>;
};

export default OneCapsule;
