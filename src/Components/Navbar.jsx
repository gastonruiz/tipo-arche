import React from 'react'
import logo from '../Assets/Images/logoArche.jpeg'

import { Link } from 'react-router-dom'

const 
Navbar = () => {


  return (
      <>

<div className=" ">
  <div className="grid lg:grid-rows-2">
    <nav
      className=" bg-rosita border">
      <div className="grid grid-cols-2 items-center justify-between">
        <Link to={"/"}>
                <img
                  className="h-16"
                  src={logo}
                  alt="logo"
                />
              </Link>
        <div className="flex items-center gap-4">
          <div className="">
            <ul className="flex  items-center gap-6">
              <li className=" font-sans text-sm ">
              <button
              className="rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-2 px-4 text-center 
              font-sans text-xs font-bold uppercase shadow-md shadow-gray-900/10 
              transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85]"
              type="button">
              <Link to={"/"} className="flex items-center">
                  Home
                </Link>
            </button>
                
              </li>
              <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
              <button
              className="rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-2 px-4 text-center 
              font-sans text-xs font-bold uppercase shadow-md shadow-gray-900/10 
              transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85]"
              type="button">
                <Link to={"/Nosotras"} className="flex items-center">
                  Nosotras
                </Link>
             
            </button>
              </li>
              <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
              <button
              className="rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-2 px-4 text-center 
              font-sans text-xs font-bold uppercase shadow-md shadow-gray-900/10 
              transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85]"
              type="button">
              <Link to={"/Cursos"} className="flex items-center">
                  Cursos
                </Link>
            </button>
              </li>
              <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
              <button
              className="rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-2 px-4 text-center 
              font-sans text-xs font-bold uppercase shadow-md shadow-gray-900/10 
              transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85]"
              type="button">
              <Link to={"/Galeria"} className="flex items-center">
                  Galeria
                </Link>
            </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    
  </div>
</div>
    
    </>
  )
}

export default 
Navbar