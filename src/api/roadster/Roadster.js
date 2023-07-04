import React, { useEffect } from "react";
import axios from "axios";

const Roadster = () => {
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/roadster")
      .then((response) => {
        // Successfully fetched data
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error here by logging to console or displaying an error message to the user.
        console.error(error);
      });
  }, []);

  return <div>Rendering Roadster component...</div>;
};

export default Roadster;
