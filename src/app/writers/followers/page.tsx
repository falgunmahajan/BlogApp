"use client"
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='w-1/2 mx-auto my-10 min-h-[calc(100vh-15rem)]'>
        <table className="w-1/2 m-auto text-sm text-left rtl:text-right text-gray-500 ">
    <caption className=" text-lg font-semibold text-left rtl:text-right text-gray-900 mb-3">
   Followers(4 of 4)
           
        </caption>
      
        <tbody>
            {[0,1,2,3,4,5,6]?[0,1,2,3,4,5,6].map((item,index)=>(
 <tr className="bg-white border  hover:bg-gray-300 " >
 <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap cursor-pointer flex items-center" >
 <Image className='rounded-full aspect-square object-cover mr-3' src="/blog.png"  alt="Not available..." width={35} height={35}/>     <div className="ps-3">
                        <div className="text-base font-semibold">Neil Sims</div>
                        <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                    </div> 
 </th>
 <td className="px-6 py-4">
 <button className='bg-red-600 border rounded-3xl text-white px-3 py-1 font-bold' >Remove</button>
 </td>
 
</tr>
            )):"No Followers Yet"}
           
        </tbody>
    </table>
    </div>
  )
}

export default page
