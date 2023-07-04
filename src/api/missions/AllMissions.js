import React, { useEffect } from "react";
import axios from "axios";

const AllMissions = () => {
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/missions")
      .then((response) => {
        // Successfully fetched data
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error here by logging to console or displaying an error message to the user.
        console.error("https://api.spacexdata.com/v3/missions?mission_name=NASA");
      });
  }, []);

  return <div>Rendering AllMissions component...</div>;
};

export default AllMissions;
