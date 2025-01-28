import React from 'react'
import "./card.css"

function card({object}) {
  return (
    <>
    <div className="card">
        <div className="card-img">
            <img src={object.logo} alt="" />
        </div>
        <p className='card-name'>{object.name}</p>
        <p className='card-lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vitae, maiores officiis cum itaque eligendi.</p>
    </div>
    </>
  )
}

export default card