"use client"
import React, { useEffect, useState } from 'react';
import nowPlayingAxios from "@/utils/nowPlayingAxios"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


const page = () => {

  const [nowPlayingMovies, setnowPlayingMovies] = useState([]);

  const getnowPlayingMovies = async () => {
    try {
      const { data } = await nowPlayingAxios.get("");
      setnowPlayingMovies(data.results);
      console.log(data);
    }
    catch (e) {
      console.log(e);
    }
    console.log(nowPlayingMovies);
  }

  useEffect(() => {
    console.log("now playing movie api called");
    getnowPlayingMovies();
  }, [])


  return (
    <>
      <div className='p-3 d-flex flex-column align-items-center justify-content-center'>

        <div> <h3 className='headings m-4'>Now Playing Movies</h3></div>
        <div className='d-flex flex-wrap justify-content-center ' style={{ gap: "15px", width: "85%" }}>


          {(nowPlayingMovies.length != 0) ?
            nowPlayingMovies.map((elem, index) => (<div key={index} className="card" style={{ width: "14rem" }}>
              <img src={"https://image.tmdb.org/t/p/w500" + `${elem.poster_path}`} className="card-img-top" alt="..." />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{elem.original_title}</h5>
                <p className="card-text">{elem.release_date}</p>
                <a href={"/details/" + `${elem.id}`} className="btn btn-color">Get Details</a>
              </div>
            </div>
            )) :
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          }

          {/* {popularMovies} */}

        </div>
      </div>

    </>
  )
}

export default page