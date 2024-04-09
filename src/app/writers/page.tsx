import Popular from '@/components/Home/Popular/Popular'
import Writer from '@/components/Writer'
import React from 'react'

const page = () => {
  return (
    <div className="w-3/4 mx-auto flex justify-between my-20" >
       
    <Writer/>
    <Popular/>
    </div>
  )
}

export default page
