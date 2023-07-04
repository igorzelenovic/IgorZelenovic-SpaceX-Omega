import React, { useEffect } from "react";
import axios from "axios";

const OneMission = () => {
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/missions/F3364BF")
      .then((response) => {
        // Successfully fetched data
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error here by logging to console or displaying an error message to the user.
        console.error("https://api.spacexdata.com/v3/missions/F3364BFF");
      });
  }, []);

  return <div>Rendering OneMission component...</div>;
};

export default OneMission;
