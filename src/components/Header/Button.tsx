"use client"
import { buttonProps } from '@/utils/propsTypes'
import { useRouter } from 'next/navigation'

import React from 'react'

const Button = ({text,link}:buttonProps) => {
  const router=useRouter()
  return (
    <button  className='bg-pink-500 rounded-lg py-1 px-3 hover:bg-blue-400' onClick={()=>router.push(link)}>{text}</button>
  )
}

export default Button
