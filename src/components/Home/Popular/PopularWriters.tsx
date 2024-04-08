"use client"
import React from 'react'
import { data } from '@/utils/client/fetch';
import { postInterface } from '@/utils/client/propsTypes';
import Image from 'next/image'
import  { useEffect, useState } from 'react'


 
const PopularWriters = () => {
    const [popularWriters, setPopularWriters] = useState<null | postInterface[]>(null);
    useEffect(() => {
      setPopularPostsData();
    });
    const setPopularPostsData = async () => {
      // const data=await fetchPosts()
      setPopularWriters(data);
    };
  return (
    <div>
       <h1 className='text-gray-500 mt-10 font-bold'>Popular Writers</h1>
      {
        popularWriters?.slice(0,2)?.map(popularWriter=>(
            <div className='flex items-center mt-5' >
                <div className='w-1/6'><Image className='rounded-full aspect-square object-cover' src="/blog.png"  alt="Not available..." width={40} height={40}/></div>
            
            <div  className='w-5/6'>
                
               <div className='text-base'>Falgun Mahajan</div>
               <div>
                <span className='text-sm text-red-500'>2  </span>
                <span className='text-gray-500 text-sm'>Followers</span>
               </div>
               
            </div>
          </div>
        ))

      }
    </div>
  )
}

export default PopularWriters
