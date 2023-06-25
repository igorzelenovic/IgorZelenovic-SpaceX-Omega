import axios from "axios";

axios
  .get("https://api.spacexdata.com/v3/payloads")
  .then((response) => {
    // Uspesno povuceni podaci
    console.log(response.data);
  })
  .catch((error) => {
    // Greska prilikom povlacenja podataka
    console.error("https://api.spacexdata.com/v3/payloads?payload_id=Telkom-1");
  });

export default AllPayloads;
