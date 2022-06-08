import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Formula1Stats from './js/formula-one';

$(document).ready(function(){
  Formula1Stats.getStats()
    .then(function(response){
      console.log(response);
    });
});