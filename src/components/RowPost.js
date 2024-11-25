import React, {useEffect,useState} from 'react'
import './rowPost.css'
import axios from 'axios'
import { apiKey, imageUrl } from './constants'
import YouTube from 'react-youtube'


function RowPost(props) {
  const [title, setTitle] = useState([])
  const [urlid,seturlId] = useState('')
   useEffect(() => {
       axios.get(props.url).then((response) => {
      console.log(response.data.results);
      setTitle(response.data.results);
       })
      },[])
      const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
      const handleMovie=(id)=>{
        console.log(id)
      axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`).then(response=>{
          if(response.data.results!==0){
            seturlId(response.data.results[0])
          }else {
            console.log("no trailer or video")
          }
      })
    }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {title.map((obj)=>{
        return(
        <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' :'poster'} src={`${title ? imageUrl+obj.backdrop_path : "[]"}`} alt="poster" />
)})}
      </div>
     { urlid && <YouTube videoId={urlid.key} opts={opts} /> }
    </div>
  )
}

export default RowPost
