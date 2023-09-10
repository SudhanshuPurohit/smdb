"use client"
import React, { useEffect, useState } from 'react'
import movieDetailsAxios from "@/utils/movieDetailsAxios";

const page = (props) => {

    const [movieDetails, setMovieDetails] = useState(null);


    const getMovieDetails = async () => {
        try {
            const { data } = await movieDetailsAxios.get(`/${props.params.moviesId}?api_key=67794447e30bbe1db4cc58b528b5b34a`);
            setMovieDetails(data);
            console.log(data);
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        console.log("get movies details");
        getMovieDetails();
    }, [])



    return (
        <div className='mt-5'>

            {(movieDetails == null) ? <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div> : (

                <div className="card mb-3 px-5 py-4 w-100 d-flex justify-content-center align-items-center details-card text-white" >
                    <div className=" d-flex  gap-4 " style={{ width: "95%" }}>
                        <div className="col-md-2 ">
                            <img src={"https://image.tmdb.org/t/p/w500" + `${movieDetails.poster_path}`} className="img-fluid rounded-start" alt="..." style={{ borderRadius: "1rem" }} />
                        </div>
                        <div className="col-md-10 d-flex justify-content-center align-items-center ">
                            <div className="card-body d-flex flex-column gap-3 flex-wrap">
                                <h1 className="card-title">{movieDetails.original_title}</h1>
                                <p className="card-text">{movieDetails.release_date}  {movieDetails.genres[0].name}{movieDetails.genres[1].name} {movieDetails.genres[2].name}</p>
                                <h5 className="card-title">Overview</h5>
                                <p className="card-text">{movieDetails.overview}</p>
                                <p className="card-text"><a className="no_click play_trailer" href={`
https://api.themoviedb.org/3/movie/${props.params.moviesId}/videos?api_key=67794447e30bbe1db4cc58b528b5b34a`} data-site="YouTube" data-id="i3jjAm2dBeo" data-title="Play Trailer"><span class="glyphicons_v2 play"></span> Play Trailer</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
        </div >
    )
}

export default page