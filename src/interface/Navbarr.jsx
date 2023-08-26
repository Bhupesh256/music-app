import React from 'react'

import { Outlet, NavLink } from "react-router-dom";

const Navbarr = () => {
  return (
    <>
 
<div className='navbar'>
      <header>

        <li><NavLink to="/">Home</NavLink></li>
       <li> <NavLink to="/playlists">Playlist</NavLink></li>
        <li><NavLink to="/favorites">Favorite</NavLink></li>
       
      </header>
      </div>
    </>
  )
}

export default Navbarr