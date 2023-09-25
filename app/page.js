"use client"
import React, { useEffect, useState } from 'react'
import popularAxios from '@/utils/popularAxios';
import nowPlayingAxios from '@/utils/nowPlayingAxios';
import { useRouter } from 'next/navigation';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, EffectCoverflow, Pagination, Mousewheel, Keyboard, Navigation } from 'swiper/modules';

import Testimonials from '@/components/Testimonials';




const page = () => {

  const router = useRouter();
  const [popularMovies, setpopularMovies] = useState([]);
  const [nowPlaying, setnowPlaying] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");



  const getnowPlayingMovies = async () => {
    try {
      const { data } = await nowPlayingAxios.get("");
      setnowPlaying(data.results);

    }
    catch (e) {
      console.log(e);
    }
  }

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
    console.log("get popular movies and now playing api called");
    getPopularMovies();
    getnowPlayingMovies();
  }, []);



  const searchSubmitHandler = (event) => {
    event.preventDefault();
    router.push(`/searchResults/${searchMovie}`)
    console.log("sudhanshu");
  }




  return (

    <div className='d-flex flex-column align-items-center justify-content-center text-white'>
      <div className=' p-5  d-flex flex-column gap-3 top-search-card' style={{ width: "85%" }}>
        <div>

          <h1>WELCOME,</h1>
          <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
        </div>
        <form onSubmit={searchSubmitHandler}>

          <div className="input-group">

            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" value={searchMovie} onChange={(e) => setSearchMovie(e.target.value)} />
            <button type="submit" className="btn  search_bar_btn text-white " style={{ fontWeight: "700" }}>search</button>
          </div>
        </form>

      </div>

      <div id="popularMoviesSlider" className='mt-5'>

        <h3 className=' ' style={{ width: "80%", color: 'black' }}>What's Popular</h3>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          initialSlide={10}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectCoverflow, Pagination]}

          className="mySwiper1"
        >


          {popularMovies.map((elem, index) => (

            (elem.poster_path.length > 0) ?
              <SwiperSlide>
                <a key={index} href={"/details/" + `${elem.id}`}>
                  <img src={"https://image.tmdb.org/t/p/w500" + `${elem.poster_path}`} />
                </a>
              </SwiperSlide> :
              ""
          ))}

        </Swiper>

      </div>

      <div id="nowPlayingMoviesSlider" className='mt-3'>

        <h3 className='' style={{ width: "80%", color: 'black' }}>Now Playing Movies!</h3>

        <Swiper
          cssMode={true}
          loop={true}
          mousewheel={true}
          grabCursor={true}
          spaceBetween={10}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper2"
     
        >


          {nowPlaying.map((elem, index) => (

            (elem.poster_path.length) ?

              <SwiperSlide>
                <a key={index} href={"/details/" + `${elem.id}`}>
                  <img src={"https://image.tmdb.org/t/p/w500" + `${elem.poster_path}`} />
                </a>
              </SwiperSlide>
              :
              ""
          ))}


        </Swiper>

      </div>
      <div id="popularMoviesSlider2" className='mt-3'>

        <h3 className='' style={{ width: "80%", color: 'black' }}>Free To Watch!</h3>

        <Swiper
          cssMode={true}
          loop={true}
          mousewheel={true}
          grabCursor={true}
          spaceBetween={10}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper2"
     
        >


          {popularMovies.map((elem, index) => (

            (elem.poster_path.length) ?

              <SwiperSlide>
                <a key={index} href={"/details/" + `${elem.id}`}>
                  <img src={"https://image.tmdb.org/t/p/w500" + `${elem.poster_path}`} />
                </a>
              </SwiperSlide>
              :
              ""
          ))}


        </Swiper>

      </div>



      <Testimonials></Testimonials>





    </div >
  );
}

export default page