import axios from "axios";

axios
  .get("https://api.spacexdata.com/v3/cores/B1042")
  .then((response) => {
    // Uspesno povuceni podaci
    console.log(response.data);
  })
  .catch((error) => {
    // Greska prilikom povlacenja podataka
    console.error("https://api.spacexdata.com/v3/cores/B1000");
  });

export default OneCore;
