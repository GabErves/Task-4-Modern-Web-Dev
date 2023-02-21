import React from 'react'
import SearchBar from '../components/SearchBar'
import Movies from '../components/Movies'
import movieData from '../utils/movies'
import { useState, useEffect } from 'react'




function App() {
  const [search, setSearch]= useState('');
  const [movies, setMovies] = useState([]);
  const [maxLength, setMaxLength] = useState();
  const [sortLength, setSortLength] = useState('asc');

  
  useEffect(() => {
  
    setMovies(movieData.filter(movie => {
      return (movie.title.toUpperCase().includes(search.toUpperCase())) &&
        ([NaN,0].includes(parseInt(maxLength,10)) || parseInt(maxLength,10) >= movie.length )
    }));
    if(sortLength=='asc'){
      movieData.sort((a, b)=>(a.length - b.length));
    }else{
      movieData.sort((a, b)=>(b.length - a.length));
    }
  
  }, [search, maxLength, sortLength]);
  


  return (
    <>
  <h1>Movie List</h1>
      <SearchBar 
      search={search} 
      setSearch={setSearch} 
      maxLength={maxLength} 
      setMaxLength={setMaxLength} 
      sortLength={sortLength} 
      setSortLength={setSortLength}/>

      <Movies movies={movies} />
      
    </>
  )
}

export default App