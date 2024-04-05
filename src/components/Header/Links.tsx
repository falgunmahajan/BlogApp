"use client"
import Link from 'next/link'
import React from 'react'
import Button from './Button'
import { usePathname } from 'next/navigation'
import { log } from 'console'
import { Menu } from '@mui/material'

const Links = () => {
  const path=usePathname()
  console.log(path);
  
  return (
    <div className='flex justify-around text-white'>
      
      <Link href="/" className={path==="/"?"p-1 text-pink-500 font-bold  hover:font-extrabold":'p-1   hover:font-extrabold'}>Home</Link>
      <Link href="/writers" className={path==="/writers"?"p-1 text-pink-500 font-bold  hover:font-extrabold":'p-1   hover:font-extrabold'}>Writers</Link>
      <Button text="Sign Up" link=""/>
    </div>
  )
}

export default Links
