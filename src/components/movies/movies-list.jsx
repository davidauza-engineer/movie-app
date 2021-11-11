import React, { useEffect, useState } from 'react';
import Movie from './movie';
import recentMovies from '../../api/RecentMovie';

const MoviesList = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    recentMovies().then(data => {
      setMovies(data.results);
    })
  }, [])

  return (
    <>
      {
        movies.map(movie => {
          return (
              < Movie movie={movie} />
          )
        })
      }
    </>
  )
};

export default MoviesList;