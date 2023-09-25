"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';


const Navigation = () => {

    const router = useRouter();
    const [searchMovie , setSearchMovie] = useState("");

    const searchSubmitHandler = (event)=>{
        event.preventDefault();
        router.push(`/searchResults/${searchMovie}`)
        console.log("sudhanshu");
      }


    return (
        <nav className="nav navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="logo_heading" href="/">SMDB</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Movies
                            </a>
                            <ul className="dropdown-menu text-black">
                                <li><Link className="dropdown-item" href="/popularMovies">Popular</Link></li>
                                <li><Link className="dropdown-item" href="/nowPlaying">Now Playing</Link></li>
                                <li><a className="dropdown-item" href="#">Upcoming</a></li>
                                <li><a className="dropdown-item" href="#">Top Rated</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown ">
                            <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                TV Shows
                            </a>
                            <ul className="dropdown-menu text-black">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                People
                            </a>
                            <ul className="dropdown-menu text-black">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                More
                            </a>
                            <ul className="dropdown-menu text-black">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                      
                    </ul>
                    <form onSubmit={searchSubmitHandler} className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchMovie} onChange={(e)=>setSearchMovie(e.target.value)} />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navigation