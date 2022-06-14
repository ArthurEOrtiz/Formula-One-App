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

      $("#leader-stats").html(`<h3>${driverStandingsArray[0].Driver.givenName} ${driverStandingsArray[0].Driver.familyName}</h3>
      <p>#${driverStandingsArray[0].Driver.permanentNumber}</p>
      <p>${driverStandingsArray[0].Constructors[0].name}</p>
      <p>Points: ${driverStandingsArray[0].points} Wins: ${driverStandingsArray[0].wins}</p>`);

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
      $("#constructor-leader-stats").html(`<h3>${constructorStandingArray[0].Constructor.name}</h3><p>Wins: ${constructorStandingArray[0].wins} Points: ${constructorStandingArray[0].points}</p>`);

    });

  Schedule.getNextRound()
    .then(function(response){
      const nextRoundObject = response;
      sessionStorage.setItem("nextRoundObject", JSON.stringify(nextRoundObject));
      const nextRound = JSON.parse(sessionStorage.getItem("nextRoundObject")).MRData.RaceTable.Races[0];
      const nextRoundHTML = `<p>${nextRound.Circuit.circuitName}</p> <p>${nextRound.date}</p> <p>${nextRound.time}</p>`;
      
      $("#nextRound").html(nextRoundHTML);

      
      let year = [];
      let month = [];
      let date = [];

      for (let i=0; i <= 3; i++) {
        year.push(parseInt(nextRound.date[i]));
      }

      for (let i=5; i<=6; i++) {
        month.push(parseInt(nextRound.date[i]));
      }

      for (let i=8; i<=9; i++) {
        date += parseInt(nextRound.date[i]);
      }

      // const nextRoundDate = year.concat(month, date);
      // console.log(nextRoundDate);

      console.log(year);
      console.log(month);
      console.log(date);

    });
});
