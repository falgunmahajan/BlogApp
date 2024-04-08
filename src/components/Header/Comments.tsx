import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Comments = () => {
    const router=useRouter()
  return (
    <div className='mt-20'>
        <h1 className='text-xl '>Post Comments</h1>
       {/* <button className="w-3/4 border border-black rounded-2xl mt-14" onClick={()=>router.push("/login")}>Sign in to comment</button> */}
       <form className='mt-14'>
       <input type='text' placeholder='Add a comment...' className='border w-3/4 py-2 px-3 '/>
       <button className='border rounded px-4 py-2 bg-slate-400 ml-2'>Post</button>
       </form>
      
       <div className="flex items-center w-1/2 mt-14">
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
        </div>
    </div>
  )
}

export default Comments
