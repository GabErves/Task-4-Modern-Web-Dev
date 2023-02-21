
import movieData from '../utils/movies'
import { useState } from "react";


const SearchBar =function({search, setSearch, maxLength, setMaxLength, sortLength, setSortLength}){


    const searchHandler=(e)=>{
        setSearch(e.target.value);
    }
    const maxLengthHandler=(e)=>{
        setMaxLength(e.target.value);
    }
    const lengthSortHandler =() =>{
    if(sortLength=='asc'){
        setSortLength('dec');
    }else{
        setSortLength('asc');
        }
    }
    return <>
    
    <label htmlFor="search">Search Query</label>
    <input type="text" name="search" onChange={searchHandler} value={search}></input>
    <label htmlFor="max-length" >Max Length</label>
    <input type="number" name="maxLength" onChange={maxLengthHandler} value={maxLength}></input>
    <button onClick={lengthSortHandler} className="relative inline-block text-lg group">
    <span className="relative">Sort Movies</span> 
    </button>
    
    
    
    
    
    
    
    
    </>
}




export default SearchBar;