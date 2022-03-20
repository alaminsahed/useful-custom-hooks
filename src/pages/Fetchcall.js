import React from 'react';
import useFetch from '../hooks/useFetch';

const Fetchcall = () => {
    const url = "https://v2.jokeapi.dev/joke/Any"
    const { data, error, loading } = useFetch(url)

    if (error) return console.log(error);

    //Now you can use your data as per your need
    return (
        <div>
            {
                loading ? <p>loading...</p> : (data ? <div><p>{data.setup}</p> <p>{data.delivery}</p></div> : null)
            }
        </div>
    );
};

export default Fetchcall;