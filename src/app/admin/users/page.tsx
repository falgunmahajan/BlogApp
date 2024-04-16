import React from 'react'

const page = () => {
  return (
    <div className='w-3/4 mx-auto my-10 min-h-[calc(100vh-10rem)]'>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
    <caption className=" text-lg font-semibold text-left rtl:text-right text-gray-900">
    Users(4 of 4)
           
        </caption>
        <thead className="text-xs text-gray-700 uppercase ">
            <tr className=' border'>
            <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Contact Number
                </th>
                
                <th scope="col" className="px-6 py-3">
                    Role
                </th>
              
              
            </tr>
        </thead>
        <tbody>
            {[0,1,2,3]?[0,1,2,3].map((item,index)=>(
 <tr className="bg-white border hover:bg-gray-300 " >
    <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
   Falgun Mahajan
 </th>
 <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap " >
    abc@gmail.com
 </th>
 <td className="px-6 py-4">
     736428391
 </td>
 <td className="px-6 py-4 ">
   Reader
 </td>

</tr>
            )):"No Users Yet"}
           
        </tbody>
    </table>
    </div>
  )
}

export default page
