import React, { useEffect } from 'react'
import { useState } from "react";
import "./btn.css"

function Projectbox({btnName , id, isActive , onClick}) {

  return (
    <>
    <div className="button" onClick={()=>onClick(id)} style={{ backgroundColor: isActive ? "orange" : "white", }}>{btnName}</div>
    </>
  )
}

export default Projectbox