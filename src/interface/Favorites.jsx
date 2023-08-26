import React, { useState } from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { removeSong } from '../store/slices/FavSongSlice';




const Favorites = () => {

  const dispatch = useDispatch();

  const song = useSelector((state) => {
    return state.songs;
  })

  const clearUser = (payload) => {
    dispatch(removeSong(payload));
  }

  const data = useSelector((state) => {
    return state.favSong;
  })



  return (
    <section>
      <p>Cick the fav button to see the song list here :) </p>

      {
        data.map((s, id) => {
          return <li key={id}>{s}<button className='fontAwesome' onClick={() => clearUser(id)}><FontAwesomeIcon icon={faTrash} /></button></li>
        })
      }

    </section>

  )

}
export default Favorites

