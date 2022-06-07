import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ConstructorStandings from './js/construtor-standings';

$(document).ready(function(){
  ConstructorStandings.getStats()
    .then(function(response){
      console.log(response);
      sessionStorage.setItem(response);
    });
});