import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Formula1DriverStats from './js/formula-one';

$(document).ready(function(){
  Formula1DriverStats.getDriverStats()
    .then(function(response){
      const driverStatObject = response;
      sessionStorage.setItem("driverStatObject",JSON.stringify(driverStatObject));
      const driverS = sessionStorage.getItem("driverStatObject");
      console.log(JSON.parse(driverS));
  
      //console.log(driverS.MRData.StandingsTable.StandingsLists[0].DriverStandings);
    });
});