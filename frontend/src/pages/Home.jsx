import React from 'react'
import { Link } from 'react-router-dom'
import LInkbutton from '../components/LinkButton'

const Home = () => {
  return (
   <div className='flex gap-4 items-center' style={{ height: '100vh' }}>
        <LInkbutton to={'/'} label={"Home"}/>
        <LInkbutton to={'/post-list'} label={"Post List"}/>
        <LInkbutton to={'/post-create'} label={"Post Create"}/>
    </div>
  )
}

export default Home
