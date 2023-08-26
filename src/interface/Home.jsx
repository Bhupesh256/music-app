import React from 'react'
import Body from './Body'
import { Outlet } from 'react-router'

const Home = () => {
  return (
    <>
    <Body/>
    <Outlet/>
    </>
  )
}

export default Home