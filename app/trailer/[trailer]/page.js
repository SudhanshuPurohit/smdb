"use client"
import React, { useEffect, useState } from 'react'
import getMovieTrailerKeyAxios from "@/utils/getMovieTralerKey";

const page = (props) => {

    const [movieTrailerKey , setMovieTrailerKey ] = useState("");

    var getMovieTrailerKey = async ()=>{
        const {data} = await getMovieTrailerKeyAxios.get(`${props.params.trailer}/videos?api_key=67794447e30bbe1db4cc58b528b5b34a`);
        console.log(data);
        setMovieTrailerKey(data.results[0].key)
    }

   

    useEffect(()=>{
      console.log("getMovieTrailerKey is call");
      getMovieTrailerKey();
    },[]);


  return (
  <div>
    {(movieTrailerKey!= "")? <div className='d-flex justify-content-center align-items-center w-100 h-100 p-3' >  <iframe className='w-75' style={{height : "80vh"}} src={`https://www.youtube.com/embed/${movieTrailerKey}`} allowFullScreen></iframe> </div>: " "}
    <h1></h1>
  </div>
  )
}

export default page