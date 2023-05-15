import React from 'react';
import { useGlobalContext } from './Context';

const Pagination = () => {
  const {page, nbpages, getPrevPage, getNextPage} = useGlobalContext();
  return(
    <>
    <div className='pagination'>
      <button className='button-prev' onClick={() => getPrevPage()}>PERV</button>
      <p>
        {page+1} of {nbpages}
      </p>
      <button className='button-prev' onClick={() => getNextPage()}>NEXT</button>
    </div>
    
    </>
 
  )
};

export default Pagination;