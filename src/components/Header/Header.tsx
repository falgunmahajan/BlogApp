"use client"
import Link from 'next/link'
import React from 'react'
import Links from './Links'



const Header = () => {
  
  return (
    <nav className='w-full flex justify-between items-center bg-slate-500 h-20'>
     <div className='w-1/5 ml-4' >
        <Link className='text-white text-xl font-bold'  href="/">Blog</Link>
        <Link className='text-pink-500 text-2xl font-bold' href="/">Verse</Link>
     </div>
     <div className=' w-1/6 '>
     
    <Links/>
     </div>
    </nav>
  )
}

export default Header
