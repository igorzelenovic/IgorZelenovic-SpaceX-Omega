import React, { useEffect } from "react";
import axios from "axios";

const AllPayloads = () => {
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/payloads")
      .then((response) => {
        // Successfully fetched data
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error here by logging to console or displaying an error message to the user.
        console.error("https://api.spacexdata.com/v3/payloads?payload_id=Telkom-1");
      });
  }, []);

  return <div>Rendering AllPayloads component...</div>;
};

export default AllPayloads;
