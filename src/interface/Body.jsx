import React from 'react';


import { useSelector } from 'react-redux/es/hooks/useSelector';
import { hindiSongs } from './Songs';
import { prevSong } from '../store/slices/SongSlice';
import { nextSong } from '../store/slices/SongSlice';
import { useDispatch } from 'react-redux';
import { addSong, removeSong } from '../store/slices/FavSongSlice';




var k = 0;

const Body = () => {
  const dispatch = useDispatch();
  const song = useSelector((state) => {
    return state.songs;
  })

  const add_Songs = (payload) => {

    if (k == 0) {
      dispatch(addSong(payload));
      k = 1;
    }
    else {
      dispatch(removeSong(payload));
      k = 0;
    }


  }
  const prev_Songs = () => {
    dispatch(prevSong());

  }
  const next_Songs = () => {
    dispatch(nextSong());

  }


  return (
    <>

      <div className="container">
        <h1>Music Player</h1>
        <div className="player">
          <div className="controls">
            <button id="play-btn" onClick={() => prev_Songs()}>Prev</button>
            <button id="pause-btn" onClick={() => next_Songs()}>Next</button>
            <button id="pause-btn" onClick={() => add_Songs(song)}>{k === 0 ? <p>Fav</p> : <p>UnFav</p>}</button>


          </div>
          <audio src={hindiSongs[song].song_src} controls />
          <div className='images'>
            <img src={hindiSongs[song].image} alt="" />
          </div>


          <div className="song-info">
            <p id="song-title">{hindiSongs[song].name}</p>
            <p id="artist">{hindiSongs[song].singer}</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Body;

