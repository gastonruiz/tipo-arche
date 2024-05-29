import React from 'react'
import logo from '../Assets/Images/logoArche.jpeg'

const 
Navbar = () => {

const NavBarItems = ["Home", "About Us", "Courses","Gallery"] 

  return (
      <>

    <div className='bg-rose-300'>
      <ul className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-current'>
        {NavBarItems.map((item)=>(
          <li>{item}</li>
        ))}
      </ul>
      <div className='flex justify-center'>
      <img  src={logo} alt="logo" width={100} height={100}/>
      </div>
    </div>
    
    </>
  )
}

export default 
Navbar