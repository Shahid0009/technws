import React from 'react'
import { useGlobalContext } from './Context';

const Search = () => {
  const {query, searchpost} = useGlobalContext();

  return(
    <>
    
    <h1>TECH NEWS BY SHAHID</h1>
     <form onSubmit={(e) => {
      e.preventDefault()
     }}>
    <div className='search-bar'>
        <input 
        type="text"
         placeholder='search here'
         value={query}
         onChange={(e) => {
          searchpost(e.target.value)
         }}
         
         />
    </div>
     </form>
    </>

  );
  
};

export default Search