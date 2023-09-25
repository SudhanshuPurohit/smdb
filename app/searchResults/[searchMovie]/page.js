"use client"
import React, { useEffect, useState } from 'react'
import searchResultAxios from "@/utils/searchMovieAxios";
import Link from 'next/link';

const page = (props) => {

    const [searchResult, setsearchResult] = useState(null);


    const getsearchResult = async () => {
        try {
            const { data } = await searchResultAxios.get(`/movie?query=${props.params.searchMovie}&api_key=67794447e30bbe1db4cc58b528b5b34a`);
            setsearchResult(data.results);
            console.log(data);
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        console.log("get search restult");
        // console.log(props.params.searchMovie);
        getsearchResult();
    }, [])



    return (
        <div className='d-flex flex-column justify-content-center align-items-center my-5'>
        

            {(searchResult == null) ? <div className="spinner-border text-primary" role="status">
  <span className="visually-hidden">Loading...</span>
</div> : (
                searchResult.map((elem, index)=>(
                    (elem.poster_path == null)?" ":
      <Link href={`/details/${elem.id}`} style={{textDecoration:"none", width:"80%" }} key = {index} className ="card mb-3" >

                    <div  >
                    <div className ="row g-0">
                      <div className ="col-md-1">
                        <img src={"https://image.tmdb.org/t/p/w200" + `${elem.poster_path}` } className ="img-fluid rounded-start" alt="..."/>
                      </div>
                      <div className ="col-md-11">
                        <div className ="card-body">
                          <h5 className ="card-title">{elem.original_title}</h5>
                          <h6 className ="card-text">{elem.release_date}</h6>
                          <p className ="card-text fix-no-line" >{elem.overview}</p>
                        </div>
                      </div>
                    </div>
                  </div>
      </Link>

                ))
                               
            )
            }
        </div >
    )
}

export default page