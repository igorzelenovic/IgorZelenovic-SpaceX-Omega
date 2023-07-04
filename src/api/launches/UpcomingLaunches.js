import React, { useEffect } from "react";
import axios from "axios";

const UpcomingLaunches = () => {
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/launches/upcoming")
      .then((response) => {
        // Successfully fetched data
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error here by logging to console or displaying an error message to the user.
        console.error("https://api.spacexdata.com/v3/launches/upcoming?flight_number=0");
      });
  }, []);

  return <div>Rendering UpcomingLaunches component...</div>;
};

export default UpcomingLaunches;
