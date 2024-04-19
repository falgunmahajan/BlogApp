"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import Button from './Button'
import { usePathname } from 'next/navigation'

import { useSession } from 'next-auth/react'

const Links = () => {
  const path=usePathname()
  console.log(path);
  const {data:session,status}:any=useSession()
  useEffect(()=>{
    console.log(session,status);
  
  },[session,status])
  return (
    <div className='flex justify-around text-white'>

{(!session || session?.user.role==="reader") && <>
  <Link href="/" className={path==="/"?"p-1 text-pink-500 font-bold mx-3  hover:font-extrabold":'p-1 mx-3  hover:font-extrabold'}>Home</Link>
  <Link href="/writers" className={path==="/writers"?"p-1 text-pink-500 font-bold mx-3  hover:font-extrabold":'p-1 mx-3  hover:font-extrabold'}>Writers</Link></>
  }
    {session?.user.role==="writer" && <>
    <Link href="/writers/posts" className={path==="/writers/posts"?"p-1 text-pink-500 font-bold  hover:font-extrabold":'p-1   hover:font-extrabold'}>Posts</Link>
      <Link href="/writers/followers" className={path==="/writers/followers"?"p-1 text-pink-500 font-bold  hover:font-extrabold":'p-1   hover:font-extrabold'}>Followers</Link>
      <Link href="/writers/createpost" className={path==="/writers/createpost"?"p-1 text-pink-500 font-bold  hover:font-extrabold":'p-1   hover:font-extrabold'}>Create</Link> 
    </>}
   
      {session?.user.role==="admin" && <>
      <Link href="/admin/dashboard" className={path==="/admin/dashboard"?"p-1 text-pink-500 font-bold mx-3 hover:font-extrabold":'p-1   hover:font-extrabold mx-3'}>Dashboard</Link> 
      <Link href="/admin/posts" className={path==="/admin/posts"?"p-1 text-pink-500 font-bold mx-3  hover:font-extrabold":'p-1   hover:font-extrabold mx-3'}>Posts</Link>
      <Link href="/admin/users" className={path==="/admin/users"?"p-1 text-pink-500 font-bold mx-3 hover:font-extrabold":'p-1   hover:font-extrabold mx-3'}>Users</Link>
      </>}
     
      {!session?<Button text="Sign In" link=""/>: <Button text="profile" link="/"/>}
       
      
    </div>
  )
}

export default Links
