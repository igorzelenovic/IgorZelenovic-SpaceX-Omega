import axios from "axios";

axios
  .get("https://api.spacexdata.com/v3/launches/upcoming")
  .then((response) => {
    // Uspesno povuceni podaci
    console.log(response.data);
  })
  .catch((error) => {
    // Greska prilikom povlacenja podataka
    console.error(
      "https://api.spacexdata.com/v3/launches/upcoming?flight_number=0"
    );
  });

export default UpcomingLaunches;
