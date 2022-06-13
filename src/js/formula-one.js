export class Formula1DriverStats {  
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

export class Formula1ConstrucorStats {  
  static getConstrutorStats() {
    return fetch(`https://ergast.com/api/f1/current/constructorStandings.json?`)
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

export class Schedule {  
  static getNextRound() {
    return fetch(`http://ergast.com/api/f1/current/next.json?`)
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