import React from 'react'
import categories from "../../categories.json"
import Button from '../Header/Button'

const Categories = () => {
  return (
    <div className='w-full'>
      <h1 className='text-2xl font-bold mb-5  w-3/4 mx-auto '>Popular Categories</h1>
      <div className='  w-3/4 mx-auto '>
        <div className='flex justify-between text-white w-3/4'>
        {categories.map(category=>(
         
       <Button text={category.category} link={`/posts?category=${category.category}`}/>
      ))}
        </div>
     
      </div>
     
    </div>
  )
}

export default Categories
