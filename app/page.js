"use client"
import React, { useEffect, useState } from 'react'
import popularAxios from '@/utils/popularAxios';
import { useRouter } from 'next/navigation';


const page = () => {

  const router = useRouter();
  const [popularMovies, setpopularMovies] = useState([]);
  const [searchMovie , setSearchMovie] = useState("");



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
  },[]);



  const searchSubmitHandler = (event)=>{
    event.preventDefault();
    router.push(`/searchResults/${searchMovie}`)
    console.log("sudhanshu");
  }

  return (

    <div className='d-flex flex-column align-items-center justify-content-center text-white'>
      <div className='w-75 p-5 border border-primary d-flex flex-column gap-3 top-search-card' >
        <div>

          <h1>WELCOME.</h1>
          <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
        </div>
        <form onSubmit={searchSubmitHandler}>

        <div className="input-group">

          <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" value={searchMovie} onChange={(e)=>setSearchMovie(e.target.value)} />
          <button type="submit" className="btn  search_bar_btn text-white " style={{ fontWeight: "700" }}>search</button>
        </div>
        </form>

      </div>

      {/* <div className="card-group">

      {(popularMovies.length != 0) ?
        popularMovies.map((elem, index) => (<div key={index} className="card card-group-items" style={{ width: "14rem" }}>
          <img src={"https://image.tmdb.org/t/p/w500" + `${elem.poster_path}`} className="card-img-top" alt="..." />
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title">{elem.original_title}</h5>
            <p className="card-text">{elem.release_date}</p>
            <a href={"/details/" + `${elem.id}`} className="btn btn-color">Get Details</a>
          </div>
        </div>
        )) :
        "No Movies to show "
      }

      </div> */}

    </div>
  );
}

export default page