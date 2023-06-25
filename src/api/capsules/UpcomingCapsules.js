import axios from "axios";

axios
  .get("https://api.spacexdata.com/v3/capsules/upcoming")
  .then((response) => {
    // Uspesno povuceni podaci
    console.log(response.data);
  })
  .catch((error) => {
    // Greska prilikom povlacenja podataka
    console.error(
      "https://api.spacexdata.com/v3/capsules/upcoming?status=true"
    );
  });

export default UpcomingCapsules;
