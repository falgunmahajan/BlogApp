import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='w-full p-10 h-2/4'>
      <div>
      </div>
      <Image src="/blog.png" alt="Not available..." width={500} height={500}/>
    </div>
  )
}

export default Banner
