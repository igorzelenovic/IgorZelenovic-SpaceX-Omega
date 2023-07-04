import React, { useEffect } from "react";
import axios from "axios";

const OneLaunch = () => {
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/launches/67")
      .then((response) => {
        // Successfully fetched data
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error here by logging to console or displaying an error message to the user.
        console.error("https://api.spacexdata.com/v3/launches/0");
      });
  }, []);

  return <div>Rendering OneLaunch component...</div>;
};

export default OneLaunch;
