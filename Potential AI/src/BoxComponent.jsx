import React from 'react'
import "./first.css"

function BoxComponent({ img , Name , heading}) {
  return (
    <>
    <div className="box-container">
        <div className="img-container">
            <img src={img} alt="" />
        </div>
        <p>{Name}</p>
        <h4>{heading}</h4>
    </div>
    </>
  )
}

export default BoxComponent