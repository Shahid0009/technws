// import React, { useEffect } from 'react';
import React from 'react';
import { useGlobalContext, } from './Context';
const Stories = () => {
    const { hits, isloading, removepost } = useGlobalContext();


    if (isloading) {
        return (
            <>
                <h1>Loading.....</h1>
            </>
        );
    }
    return (
        <>
            {/* <h2>My Tech Newa Post hello</h2>
            {hits?.map((curPost) => {
                    return <h2> {curPost.hits}</h2>
                })} */}
            <div className='cards'>
                {hits.map((curpost) => {
                    const { title, author, objectID, url, num_comments } = curpost;
                    return (
                        <div className='card'>


                            <h2>{title}</h2>
                            <p>
                                by <span> {author}</span> | <span>{
                                    num_comments}</span>
                                comments
                            </p>

                            <div className='card-button'>

                                <a href={url} target='_blank'>Read more</a>
                                <a href="#" onClick={() => {
                                    removepost(objectID)
                                }}>
                                    Remove
                                </a>
                            </div>
                        </div>



                    )
                })}
            </div>


        </>
    );
};

export default Stories;