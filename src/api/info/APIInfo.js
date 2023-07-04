import React, { useEffect } from "react";
import axios from "axios";

const APIInfo = () => {
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3")
      .then((response) => {
        // Successfully fetched data
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error here by logging to console or displaying an error message to the user.
        console.error(error);
      });
  }, []);

  return <div>Rendering APIInfo component...</div>;
};

export default APIInfo;
