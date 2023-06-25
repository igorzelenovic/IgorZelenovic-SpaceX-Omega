import axios from "axios";

axios
  .get("https://api.spacexdata.com/v3/capsules/C112")
  .then((response) => {
    // Uspesno povuceni podaci
    console.log(response.data);
  })
  .catch((error) => {
    // Greska prilikom povlacenja podataka
    console.error("https://api.spacexdata.com/v3/capsules/C100");
  });

export default OneCapsule;
