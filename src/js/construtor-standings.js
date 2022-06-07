export default class ConstructorStandings {  
  static getStats() {
    return fetch(`http://ergast.com/api/f1/current/constructorStandings.json?`)
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