import { Card } from 'flowbite-react'
import React from 'react'
import img  from "../../assets/screenshot3.png"

const CardCom = () => {
  return (
    <div>
<Card >

    <img src={img} alt=""  className='object-cover'/>
<div>
    <h2> name </h2>
    <h2> name </h2>
    
</div>



</Card>


    </div>
  )
}

export default CardCom