import React, { useEffect } from "react";
import axios from "axios";

const OneLandingPad = () => {
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/landpads/LZ-4")
      .then((response) => {
        // Successfully fetched data
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error here by logging to console or displaying an error message to the user.
        console.error(error.message);
      });
  }, []);

  return <div>Rendering OneLandingPad component...</div>;
};

export default OneLandingPad;
