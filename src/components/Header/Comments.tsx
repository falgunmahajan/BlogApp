import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Comments = () => {
    const router=useRouter()
  return (
    <div>
       
       {/* <button className="w-3/4 border border-gray-500 rounded-2xl mt-10  text-gray-600" onClick={()=>router.push("/login")}>Sign in to comment</button> */}
       <div className='mt-14 border p-4 rounded-2xl border-gray-400'>
       <form>
       {/* <input type='text' placeholder='Add a comment...' className='border rounded-lg w-full py-2 px-3  '/> */}
       <textarea id="message" rows={3} className="border-2 p-2.5 w-full text-sm bg-gray-50  rounded-lg " placeholder="Add a comment..."></textarea>
       <div className='flex justify-between mt-5 items-center'>
       <div className='text-sm text-gray-400'>200 characters remaining</div>
       <button className='border rounded-lg px-4 py-2 bg-slate-400 ml-2'>Submit</button>
       </div>
       </form>
       </div>
       
       {/* <h1 className='text-base mt-8 '> Comments <span className='border-2 px-2 py-1'>3</span> </h1> */}
       <div className='mt-5 '>No comments yet</div>
       {/* <div className="flex items-center w-1/2 mt-8">
          <div className="w-1/6">
            <Image
              className="rounded-full aspect-square object-cover"
              src="/blog.png"
              alt="Not available..."
              width={40}
              height={40}
            />
          </div>

          <div className="w-5/6 text-sm">
            <div className="font-bold">Falgun Mahajan<span className="text-gray-400 text-sm italic"> wed Nov 29 2023</span></div>
            <div className="text-gray-500">Nice comment.keep writing</div>
            <div className=' mt-2'>
                <button className='mr-3 text-red-600'>Edit</button>
                <button className='mr-3 text-red-600'>Delete</button>
            </div>
          </div>
        </div> */}
    </div>
  )
}

export default Comments
