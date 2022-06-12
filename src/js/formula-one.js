export default class Formula1DriverStats {  
  static getDriverStats() {
    return fetch(`https://ergast.com/api/f1/current/driverStandings.json?`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.status);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}