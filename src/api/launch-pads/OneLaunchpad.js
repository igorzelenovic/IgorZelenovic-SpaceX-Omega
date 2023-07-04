import React, { useEffect } from "react";
import axios from "axios";

const OneLaunchPad = () => {
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/launchpads/vafb_slc_4w")
      .then((response) => {
        // Successfully fetched data
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error here by logging to console or displaying an error message to the user.
        console.error("https://api.spacexdata.com/v3/launchpads/vafb");
      });
  }, []);

  return <div>Rendering OneLaunchPad component...</div>;
};

export default OneLaunchPad;
