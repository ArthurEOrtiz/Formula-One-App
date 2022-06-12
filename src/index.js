import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Formula1DriverStats from "./js/formula-one";

$(document).ready(function () {
  Formula1DriverStats.getDriverStats().then(function (response) {
    const driverStatObject = response; // this response is already JSON
    sessionStorage.setItem(
      "driverStatObject",
      JSON.stringify(driverStatObject)
    );
    console.log(
      JSON.parse(sessionStorage.getItem("driverStatObject")).MRData
        .StandingsTable.StandingsLists[0].DriverStandings
    );
  });
  $(document).ready(function () {
    $("#table_id").DataTable();
  });
});
