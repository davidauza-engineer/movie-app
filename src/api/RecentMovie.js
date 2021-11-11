const recentMovies = () => {
  return fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=6b33e99e61919cabb1e978409b10470d&language=en-US&page=1')
      .then(data => data.json()).catch(error => console.log(error));

}

export default recentMovies;