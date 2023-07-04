import React, { useEffect } from "react";
import axios from "axios";

const PastLaunches = () => {
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/launches/past")
      .then((response) => {
        // Successfully fetched data
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error here by logging to console or displaying an error message to the user.
        console.error("https://api.spacexdata.com/v3/launches/past?flight_number=0");
      });
  }, []);

  return <div>Rendering PastLaunches component...</div>;
};

export default PastLaunches;
