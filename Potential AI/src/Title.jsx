import React from 'react'
import "./first.css"

function Title({title}) {
  return (
    <>
    <div className="upper">
        <h1>{title}</h1>
        <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatem doloremque ut labore consectetur facere.</p>
    </div>
    </>
  )
}

export default Title