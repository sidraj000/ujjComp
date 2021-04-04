import React from 'react'
import cam from '../assets/img/camera.jpg'
const Featured:React.FC=()=>{
  return(
    <div>
     <img src={cam}/>
     <p>Leica S(Typ 006)</p>
     <p>Rs 10,000</p>
    </div>
  ) 
}
export default Featured;