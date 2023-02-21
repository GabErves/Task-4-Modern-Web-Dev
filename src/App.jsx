

import React from 'react'
import SearchBar from '../components/SearchBar'
import Movies from '../components/Movies'
import movieList from '../utils/movies'
import { useState, useEffect } from 'react'




function App() {
  const [search, setSearch]= useState('');
  const [movies, setMovies] = useState([]);
  const [maxLength, setMaxLength] = useState();
  const [sortLength, setSortLength] = useState('asc');

  


  
  
  useEffect(() => {
  
    
    setMovies(movieList.filter(movie => {
      return (movie.title.toUpperCase().includes(search.toUpperCase())) &&
        ([NaN,0].includes(parseInt(maxLength,10)) || parseInt(maxLength,10) >= movie.length )
    }));
    if(sortLength=='asc'){
      movieList.sort((a, b)=>(a.length-b.length));
    }else{
      movieList.sort((a, b)=>(b.length-a.length));
    }



    
    
    

  
  
  }, [search, maxLength, sortLength]);
  

  






  return (
    <>
      

      
      <SearchBar search={search} setSearch={setSearch} maxLength={maxLength} setMaxLength={setMaxLength} sortLength={sortLength} setSortLength={setSortLength}/>
      <Movies movies={movies} />
     
      
    </>
  )
}

export default App