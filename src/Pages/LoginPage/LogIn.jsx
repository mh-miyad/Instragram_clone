import React from 'react'
import Lefsite from '../../components/logImg/Lefsite'
import FormLog from '../../components/LoginCom/FormLog'

const LogIn = () => {
  return (
    <div className=' flex justify-center'>
 <div className=' block md:flex  items-center'>
    <div className='hidden md:block max-w-md'>
        <Lefsite/>
    </div>
    <div  className=' p-10'>
       <FormLog/>
    </div>
 </div>

    </div>
  )
}

export default LogIn