import React, { useEffect } from "react";
import axios from "axios";

const OneDragon = () => {
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/dragons/dragon1")
      .then((response) => {
        // Uspesno povuceni podaci
        console.log(response.data);
      })
      .catch((error) => {
        // Greska prilikom povlacenja podataka
        console.error("https://api.spacexdata.com/v3/dragons/dragon0");
      });
  }, []);

  return <div>Rendering OneDragon component...</div>;
};

export default OneDragon;
