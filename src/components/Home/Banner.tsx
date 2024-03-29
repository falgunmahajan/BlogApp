import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='w-full flex justify-around items-center p-10 my-10 h-2/4 '>
     
      <div className='w-1/2 flex justify-center'>
      <Image src="/blog.png" alt="Not available..." width={500} height={500}/>
      </div>
      <div className='w-1/2 text-center'>
        <div className='text-4xl font-bold mb-4 text-pink-500 '>Welcome to BlogVerse</div>
        <div className='text-lg   '>Welcome to our vibrant community of writers and readers.</div>
        <div className='text-lg  '>Dive into a world of imagination and inspiration as your craft, explore, and engage with captivating blogs and discussions</div>

      </div>
    </div>
  )
}

export default Banner
