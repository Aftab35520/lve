import React from 'react';
import "./Global.css";

export default function Button(prop) {
  return (
    <div className='Global_button'> 
       <p>{prop.value}</p>
    </div>
  )
}
