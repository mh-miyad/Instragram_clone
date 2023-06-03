import { Sidebar } from 'flowbite-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Sildebar.css"

const SideCom = () => {
  return (
    <div>
       <Sidebar aria-label="Sidebar with logo branding example">
  <Sidebar.Logo

   
  >
    <span className='text-4xl uppercase'> instagram</span>
  </Sidebar.Logo>
  <Sidebar.Items>
    <Sidebar.ItemGroup id='sidebar'>
      <Sidebar.Item
     
        
      >
        <NavLink to={'/'}>
          Home
        </NavLink>
      </Sidebar.Item>
      <Sidebar.Item
        href="#"
        
      >
         Search
      </Sidebar.Item>
      <Sidebar.Item
        href="#"
        
      >
        Explore
      </Sidebar.Item>
      <Sidebar.Item
        href="#"
        
      >
        Reels
      </Sidebar.Item>
      <Sidebar.Item
        href="#"
        
      >
         Massage
      </Sidebar.Item>
      <Sidebar.Item
        href="#"
        
      >
        Sign In
      </Sidebar.Item>
      <Sidebar.Item
        href="#"
        
      >
         Notification 
      </Sidebar.Item>
      <Sidebar.Item
        href="#"
        
      >
         Create 
      </Sidebar.Item>
      <Sidebar.Item
        href="#"
        
      >
          profile 
      </Sidebar.Item>
    </Sidebar.ItemGroup>
  </Sidebar.Items>
</Sidebar>
    </div>
  )
}

export default SideCom