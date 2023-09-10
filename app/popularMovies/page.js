"use client"
import React, { useEffect, useState } from 'react';
import popularAxios from '@/utils/popularAxios'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


const page = () => {

  const [popularMovies, setpopularMovies] = useState([]);

  const getPopularMovies = async () => {
    try {
      const { data } = await popularAxios.get("");
      setpopularMovies(data.results);

    }
    catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    console.log("get popular movies api called");
    getPopularMovies();
    console.log(popularMovies);
  },[])


  return (
    <>
    <div className='p-3 d-flex flex-column align-items-center justify-content-center'>

    <div> <h3 className='headings m-4'>Popular Movies</h3></div>
    <div className='d-flex flex-wrap justify-content-center ' style={{gap: "15px", width: "85%"}}>


      {(popularMovies.length != 0) ?
        popularMovies.map((elem, index) => (<div key={index} className="card" style={{ width: "14rem" }}>
          <img src={"https://image.tmdb.org/t/p/w500" + `${elem.poster_path}`} className="card-img-top" alt="..." />
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title">{elem.original_title}</h5>
            <p className="card-text">{elem.release_date}</p>
            <a href={"/details/" + `${elem.id}`} className="btn btn-color">Get Details</a>
          </div>
        </div>
        )) :
        <div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
      }

      {/* {popularMovies} */}

    </div>
    </div>

        </>
  )
}

export default page