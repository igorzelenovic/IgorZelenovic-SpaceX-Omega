import React, { useEffect } from "react";
import axios from "axios";

const AllCapsules = () => {
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/capsules")
      .then((response) => {
        // Uspesno povuceni podaci
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error here by logging to console or displaying an error message to user.
        console.error(error.message);
      });
  }, []);

  return <div>Rendering AllCapsules component...</div>;
};

export default AllCapsules;
