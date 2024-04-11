import React from 'react'
import logo from './logo.svg'


function Logo({width='100px'}) {
  return (
    <div>
      <img className="h-16 w-auto" src={logo} alt="" />
    </div>
  )
}

export default Logo