import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './interface/Navbarr'
import Body from './interface/Body';
import Favorites from './interface/Favorites'

import Playlist from './interface/Playlist'




import './App.css'



function App() {


  return (
    <>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path='/' element={<Body />} />

          <Route path='/playlists' element={<Playlist />} />
          <Route path='/favorites' element={<Favorites />} />



        </Routes>
      </BrowserRouter>
    </>

  )
}



export default App;
