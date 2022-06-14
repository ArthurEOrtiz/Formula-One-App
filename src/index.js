import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {Formula1DriverStats, Formula1ConstrucorStats, Schedule}  from './js/formula-one';

$(document).ready(function(){
  Formula1DriverStats.getDriverStats()
    .then(function(response){
      const driverStatObject = response;
      sessionStorage.setItem("driverStatObject", JSON.stringify(driverStatObject));
      const driverStandingsArray = JSON.parse(sessionStorage.getItem('driverStatObject')).MRData.StandingsTable.StandingsLists[0].DriverStandings; 
      let driverStandingsHTML = "";
      
      for (let i = 0; i < driverStandingsArray.length; i ++) {

        driverStandingsHTML += `<li> ${driverStandingsArray[i].Driver.givenName} ${driverStandingsArray[i].Driver.familyName} #${driverStandingsArray[i].Driver.permanentNumber} Points:${driverStandingsArray[i].points} Wins:${driverStandingsArray[i].wins} ${driverStandingsArray[i].Constructors[0].name} Team Nationality:${driverStandingsArray[i].Constructors[0].nationality}</li>`; 
        
      }

      $("#driverStandings").html(driverStandingsHTML);

    });

  Formula1ConstrucorStats.getConstrutorStats() 
    .then(function(response){
      const constructorStandingsObject = response;
      sessionStorage.setItem("constructorStandingObject", JSON.stringify(constructorStandingsObject));
      const constructorStandingArray = JSON.parse(sessionStorage.getItem("constructorStandingObject")).MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
      let constructorStandingsHTML = "";

      for (let i = 0; i < constructorStandingArray.length; i ++) {
        constructorStandingsHTML  += `<li>${constructorStandingArray[i].Constructor.name} Points:${constructorStandingArray[i].points} Wins:${constructorStandingArray[i].wins} </li>`;
      }

      $("#constructorStandings").html(constructorStandingsHTML);
      console.log(constructorStandingsHTML);

    });
});
