import React, { useEffect } from "react";
import axios from "axios";

const LatestLaunch = () => {
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/launches/latest")
      .then((response) => {
        // Successfully fetched data
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error here by logging to console or displaying an error message to the user.
        console.error(error);
      });
  }, []);

  return <div>Rendering LatestLaunch component...</div>;
};

export default LatestLaunch;
