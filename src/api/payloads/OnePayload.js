import React, { useEffect } from "react";
import axios from "axios";

const OnePayload = () => {
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/payloads/Telkom-4")
      .then((response) => {
        // Successfully fetched data
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error here by logging to console or displaying an error message to the user.
        console.error("https://api.spacexdata.com/v3/payloads/Telkom-1");
      });
  }, []);

  return <div>Rendering OnePayload component...</div>;
};

export default OnePayload;
