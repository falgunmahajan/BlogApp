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
{/*       
// reader */}
      <Link href="/" className={path==="/"?"p-1 text-pink-500 font-bold mx-3  hover:font-extrabold":'p-1 mx-3  hover:font-extrabold'}>Home</Link>
      <Link href="/writers" className={path==="/writers"?"p-1 text-pink-500 font-bold mx-3  hover:font-extrabold":'p-1 mx-3  hover:font-extrabold'}>Writers</Link>
      {/* // writers 
      <Link href="/writers/posts" className={path==="/writers/posts"?"p-1 text-pink-500 font-bold  hover:font-extrabold":'p-1   hover:font-extrabold'}>Posts</Link>
      <Link href="/writers/followers" className={path==="/writers/followers"?"p-1 text-pink-500 font-bold  hover:font-extrabold":'p-1   hover:font-extrabold'}>Followers</Link>
      <Link href="/writers/createpost" className={path==="/writers/createpost"?"p-1 text-pink-500 font-bold  hover:font-extrabold":'p-1   hover:font-extrabold'}>Create</Link> */}
      
      {/* admin 
      <Link href="/admin/dashboard" className={path==="/admin/dashboard"?"p-1 text-pink-500 font-bold mx-3 hover:font-extrabold":'p-1   hover:font-extrabold mx-3'}>Dashboard</Link> 
      <Link href="/admin/posts" className={path==="/admin/posts"?"p-1 text-pink-500 font-bold mx-3  hover:font-extrabold":'p-1   hover:font-extrabold mx-3'}>Posts</Link>
      <Link href="/admin/users" className={path==="/admin/users"?"p-1 text-pink-500 font-bold mx-3 hover:font-extrabold":'p-1   hover:font-extrabold mx-3'}>Users</Link>*/}
       <Button text="Sign Up" link=""/>
       {/* <Button text="Sign In" link="/login"/> */}
      {/* <Button text="profile" link="/"/> */}
    </div>
  )
}

export default Links
