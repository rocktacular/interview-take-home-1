const rootUrl = `https://api.themoviedb.org/3`;
const apiKey = process.env.REACT_APP_TMDB_API_URL;
export default {
  discover: function(year) {
    return fetch(
      `${rootUrl}/discover/movie?api_key=${apiKey}&primary_release_year=${year}`
    )
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then(json => json.results);
  }
};
