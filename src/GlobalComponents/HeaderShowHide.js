import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
export default function HeaderShowHide({children}) {
  const Location=useLocation()
  const[handleHeader,SetHeader]=useState(true)
  useEffect(()=>{
    if(Location.pathname==="/service"){
        SetHeader(false)
    }
    else{SetHeader(true)}
    },[Location])

    return (
    <div>
      {handleHeader===true?children:<div></div>}
    </div>
  )
}
