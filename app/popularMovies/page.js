"use client"
import React, { useState } from 'react';
import popularAxios from '@/utils/popularAxios'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


const page = () => {

  const [popularMovies, setpopularMovies] = useState([]);

  const getPopularMovies = async () => {
    try {
      const { data } = await popularAxios.get("");
      setpopularMovies(data.results)
    }
    catch (e) {
      console.log(e);
    }
    console.log(popularMovies);
  }


  return (
    <div>Popular Cards
      <button onClick={getPopularMovies}>getPosts</button>


        {(popularMovies.length !=0)? 
          popularMovies.map((elem,index)=>(<div key={index} className ="card" style={{width: "18rem"}}>
          <img src="" className ="card-img-top" alt="..."/>
          <div className ="card-body">
            <h5 className ="card-title">Card title</h5>
            <p className ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className ="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        )):
          "No Movies to show "
        }

        {/* {popularMovies} */}

    </div>
  )
}

export default page