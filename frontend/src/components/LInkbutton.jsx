import React from 'react'
import { Link } from 'react-router-dom'

const LInkbutton = ({to,label}) => {
  return (
    <div>
       <Link to={to} className='inline-block bg-black-600 text-black p-3 rounded-2xl border border-solid border-yellow-600 hover:text-black hover:bg-transparent transition-all duration-300'>{label}</Link>
    </div>
  )
}

export default LInkbutton
