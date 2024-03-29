"use client"
import React from 'react'
import { data } from '@/utils/fetch';
import { postInterface } from '@/utils/propsTypes';
import Image from 'next/image'
import  { useEffect, useState } from 'react'


 
const PopularCategories = () => {
    const [popularPosts, setPopularPosts] = useState<null | postInterface[]>(null);
    useEffect(() => {
      setPopularPostsData();
    });
    const setPopularPostsData = async () => {
      // const data=await fetchPosts()
      setPopularPosts(data);
    };
  return (
    <div>
       <h1 className='text-gray-500 '>Popular Articles</h1>
      {
        popularPosts?.slice(0,4)?.map(popularPost=>(
            <div className='flex items-center mt-5' >
                <div className='w-1/6'><Image className='rounded-full aspect-square object-cover' src="/blog.png"  alt="Not available..." width={40} height={40}/></div>
            
            <div  className='w-5/6'>
               <button className='bg-red-500 rounded-lg  px-1 mb-1 text-white text-sm'>coding</button> 
               <div className='font-bold mb-1'>{popularPost.title}</div>
               <div>
                <span className='text-sm'>Falgun Mahajan  </span>
                <span className='text-gray-500 text-sm'> - 10.08.2023</span>
               </div>
               
            </div>
          </div>
        ))

      }
    </div>
  )
}

export default PopularCategories
