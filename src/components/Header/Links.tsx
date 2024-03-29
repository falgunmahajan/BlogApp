"use client"
import Link from 'next/link'
import React from 'react'
import Button from './Button'
import { usePathname } from 'next/navigation'
import { log } from 'console'

const Links = () => {
  const path=usePathname()
  console.log(path);
  
  return (
    <div className='flex justify-around text-white'>
      <Link href="/" className={path==="/"?"p-1 text-pink-500 font-bold":'p-1'}>Home</Link>
      <Link href="/writers" className={path==="/writers"?"p-1 text-pink-500 font-bold":'p-1'}>Writers</Link>
      <Button text="Login" link="/login"/>
    </div>
  )
}

export default Links
