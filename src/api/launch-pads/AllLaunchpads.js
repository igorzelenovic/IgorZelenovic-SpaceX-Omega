import axios from "axios";

axios
  .get("https://api.spacexdata.com/v3/launchpads")
  .then((response) => {
    // Uspesno povuceni podaci
    console.log(response.data);
  })
  .catch((error) => {
    // Handle error here by logging to console or displaying an error message to user.
    console.error(error.message);
  });

export default AllLaunchPads;
