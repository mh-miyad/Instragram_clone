import React from 'react'
 import {Label,Button,TextInput, Checkbox} from "flowbite-react"
 import {AiFillFacebook} from "react-icons/all"
 import img1 from "../../assets/Instagram.png"
 import "../../App.css"
const FormLog = () => {
  return (
    <div className='mt-20'>
    <div  className=' border p-5 rounded  shadow-lg shadow-black/20'>

      <div className='text-6xl p-5  font-instra'>
        Instagram 
      </div>
        <form className="flex flex-col gap-4">
  <div className=''>
  
    <TextInput
      id="email1"
      type="text"
      placeholder="Phone,Email,Username "
      required={true}
      className=''
    />
  </div>
  <div className=''>
    
    <TextInput
      id="password1"
      type="password"
      required={true}
    />
  </div>
 
  <button type='submit' className='bg-sky-400 text-white font-bold py-1 rounded-lg'> Log In</button>
  <hr />
<div className='flex  justify-center'>
<span className=''>or </span>  
      
</div>
<div className='flex  justify-center'>
             <button className=' px-5 py-1 rounded-xl flex items-center gap-2'><AiFillFacebook className='w-5 h-5 text-blue-800 '/>
              <span> Log With Facebook </span>
             </button>
       </div>
      
</form>

    </div>
    <div className='text-center  p-10 my-4 border shadow-xl'>
        <span> Don't have an account? </span>
        <button className='ml-2 hover:underline text-blue-500 font-bold underline-offset-2'> Sign up</button>
       </div>
       <div className='flex justify-center my-5'>
        <img src={img1} alt="" />
       </div>
    </div>
  )
}

export default FormLog