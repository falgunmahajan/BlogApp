"use client"

import React from 'react'
import Links from './Links'



const Header = () => {
  
  return (
    <nav className='w-full flex justify-between items-center bg-slate-500 h-20'>
     <div className='w-1/5 ml-10 flex' >
        <h1 className='text-white text-xl font-bold'  >Blog</h1>
        <h1 className='text-pink-500 text-2xl font-bold' >Verse</h1>
     </div>
     <div className=' mr-10 '>
     
    <Links/>
     </div>
    </nav>
  )
}

export default Header
