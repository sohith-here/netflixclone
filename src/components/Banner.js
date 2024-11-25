import React, { useEffect, useState } from 'react'
import './banner.css'
import axios from './axios'
import {apiKey} from './constants'
import { imageUrl } from './constants'
function Banner() {
    const [movie, setMovie] = useState()
    useEffect(()=> {
        axios.get(`trending/all/week?api_key=${apiKey}&language=en-US`).then((response)=>{
        console.log(response.data.results[15]);
        setMovie(response.data.results[15]);
    }
        );
    },[])
  return (
    
    <div 
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}} 
    className='banner'>
      <div className='content'>
        <h1 className='title'>{movie ? movie.original_name || movie.original_title : ""}</h1>
        <div>
        <button className='buttons'>Play</button>
        <button className='buttons'>My List</button>
        </div>
        <h3 className='description'>{movie ? movie.overview : ""}</h3>
      </div>
      <div className="fade-bottom"></div>
    </div>
      
  )
}

export default Banner
