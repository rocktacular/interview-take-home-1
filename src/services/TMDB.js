const rootUrl = `https://api.themoviedb.org/3`;
const apiKey = process.env.REACT_APP_TMDB_API_URL;
export default {
  discover: async function(year) {
    const res = await fetch(
      `${rootUrl}/discover/movie?api_key=${apiKey}&primary_release_year=${year}`
    );
    const json = await res.json();
    return json.results;
  }
};
