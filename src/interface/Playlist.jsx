import React from 'react'
import { hindiSongs } from './Songs'
import { NavLink } from 'react-router-dom'



const Playlist = () => {
  return (
    <>
     
   <div className="song">
   {hindiSongs.map((Songs,index)=>{
   

   return(

     <li key={index} ><NavLink to="/">{Songs.name} by {Songs.singer}</NavLink></li>

   );

   
   
   })}
   
   {/* <audio src={hindiSongs[state].song} controls/> */}
   </div>
   
    
    </> 
  )
}

export default Playlist