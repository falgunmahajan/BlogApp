"use client"
import Link from 'next/link'
import React from 'react'
import Button from './Button'

const Links = () => {
  return (
    <div className='flex justify-around text-white'>
      <Link href="" className='p-1'>Home</Link>
      <Link href="" className='p-1'>Authors</Link>
      <Button/>
    </div>
  )
}

export default Links
