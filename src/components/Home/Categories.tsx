"use client"
import React from 'react'
import categories from "../../categories.json"
import Button from '../Header/Button'
import { usePathname } from 'next/navigation'

const Categories = () => {
  const path = usePathname()
  console.log(path);
  
  return (
    <div className='w-full'>
      
      <div className='  w-3/4 mx-auto '>
        <div className='flex justify-between text-white w-3/4'>
        {path==="/writers/1" &&  <Button text="All" link={`/writers/1`}/>}
        {categories.map(category=>(
     
       <Button text={category.category} link={path==="/"?`/posts?category=${category.category}`:`/writers/1?postcategory=${category.category}`}/>
      ))}
        </div>
     
      </div>
     
    </div>
  )
}

export default Categories
