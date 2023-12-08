import React, { useEffect, useState } from 'react'
import tmdbAxiosInstance from '../tmdbAxiosInstance'
import './Row.css'

function Row({title,fetchUrl}) {

  const[allMovies,setAllowMovies]=useState([])
  const base_url_img='https://image.tmdb.org/t/p/original'
  const fetchData=async()=>{
  const response=await tmdbAxiosInstance.get(fetchUrl)

  //console.log(response.data.results)
  setAllowMovies(response.data.results)
  //console.log(allMovies)
}
//fetchdata()
useEffect(()=>{
fetchData()},[])
console.log(allMovies)

  return (
    <div className='row'>
      <h1>{title}</h1>
    <div className='movies-row'>
    {
      allMovies?.map((item)=>(
     <img className='movie' src={`${base_url_img}${item.backdrop_path}`} alt="no-image"/>
      ))
    }
    </div>
    </div>
  )
}

export default Row