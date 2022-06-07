export default class Formula1Stats {  
  static getStats() {
    return fetch(`https://api.sportradar.us/formula1/trial/v2/en/sport_events/sr:stage:937183/summary.json?api_key=${process.env.API_KEY}`)
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