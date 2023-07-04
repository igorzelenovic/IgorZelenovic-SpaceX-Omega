import React, { useEffect } from "react";
import axios from "axios";

const OneCore = () => {
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/cores/B1042")
      .then((response) => {
        // Uspesno povuceni podaci
        console.log(response.data);
      })
      .catch((error) => {
        // Greska prilikom povlacenja podataka
        console.error(error.message);
      });
  }, []);

  return <div>Rendering OneCore component...</div>;
};

export default OneCore;
