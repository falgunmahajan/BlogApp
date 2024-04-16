"use client"
import React, { useState } from 'react'
import { data } from "@/utils/client/fetch";
import { Comment, DeleteOutlineSharp, Edit, MoreVert, SettingsOutlined, Visibility } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
const page = () => {
    const [display,setDisplay]=useState<Number|null>(null)
    const router = useRouter()
  return (
    <div className=' w-11/12 mx-auto my-10 min-h-[calc(100vh-10rem)]'>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
    <caption className=" text-lg font-semibold text-left rtl:text-right text-gray-900">
    Posts(4 of 4)
           
        </caption>
        <thead className="text-xs text-gray-700 uppercase ">
            <tr className=' border'>
            <th scope="col" className="px-6 py-3">
                    Writer
                </th>
                <th scope="col" className="px-6 py-3">
                    Post Title
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                
                <th scope="col" className="px-6 py-3">
                    Views
                </th>
                <th scope="col" className="px-6 py-3 ">
                    Comments
                   
                </th>
                <th scope="col" className="px-6 py-3">
                    Post Date
                   
                </th>
                <th scope="col" className="px-6 py-3 ">
                    Status
                   
                </th>
                <th scope="col" className="px-6 py-3 text-right">
                    Action
                   
                </th>
            </tr>
        </thead>
        <tbody>
            {data?data.map((item,index)=>(
 <tr className="bg-white border hover:bg-gray-300 " >
    <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap cursor-pointer" onClick={()=>router.push(`/writers/posts/${item.id}`)}>
   Falgun Mahajan
 </th>
 <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap cursor-pointer" onClick={()=>router.push(`/writers/posts/${item.id}`)}>
    {item.title}
 </th>
 <td className="px-6 py-4">
     Coding
 </td>
 <td className="px-6 py-4 ">
    <Visibility fontSize='small'/> 18
 </td>
 <td className="px-6 py-4">
     <Comment/> 2
 </td>
 <td className="px-6 py-4">
     4 days ago
 </td>
 <td className="px-6 py-4  " >
   <button className='bg-green-800 border rounded-3xl text-white px-3 py-1 font-bold' >Active</button>
   {/* <button className='bg-red-800 border rounded-3xl text-white px-3 py-1 font-bold'>Disabled</button> */}
   
 </td>
 <td className="px-6 py-4 text-center relative" onClick={()=>setDisplay(index)} onMouseLeave={()=>setDisplay(null)}>
    <MoreVert/>
    <div className={`absolute ${display!==index&&"hidden"} z-10 mt-1 shadow w-36 right-0  py-3  bg-slate-100  text-gray-500`}>
        <ul>
            <li className='px-4 my-2 cursor-pointer'>
               <SettingsOutlined fontSize='small'/> Disable
            </li>
          
            <hr className='border bg-gray-500 my-3'/>
            <li className='px-4 text-xs'>
                Danger zone
            </li>
            <li className='px-4 text-red-600 mt-2 cursor-pointer'>
              <DeleteOutlineSharp fontSize='small'/> Delete Post
            </li>
        </ul>
    </div>
 </td>

</tr>
            )):"No Posts Yet"}
           
        </tbody>
    </table>
    </div>
  )
}

export default page