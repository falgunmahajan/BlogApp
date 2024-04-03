import { Lock, Mail, Visibility } from '@mui/icons-material'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="h-[calc(100vh-10rem)] flex items-center justify-center">
    <div className="w-1/4   shadow-2xl shadow-transparent/50 p-5 rounded-md">
      <h1 className="text-3xl m-8 text-center text-pink-500 font-bold">Admin Sign In</h1>
      <div className="relative m-6">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <Mail color="disabled" />
        </div>
        <input
          type="text"
          id="input-group-1"
          className="border text-sm rounded-lg shadow shadow-transparent/40 block w-full ps-12 p-2.5 "
          placeholder="Email or Mobile number"
        />
      </div>
      <div className="relative m-6">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <Lock color="disabled" />
        </div>
        <input
          type="text"
          id="input-group-1"
          className="border text-sm rounded-lg shadow shadow-transparent/40 block w-full ps-12 p-2.5 "
          placeholder="Password"
        />
        <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 ">
         <Visibility color="disabled"/>
        </div>
      </div>
      <div className="   m-6">
        <button className="border rounded-lg w-full p-2.5 bg-pink-500 text-white shadow shadow-transparent/20 ">
         Sign In
        </button>
        <div className="mt-8 text-center text-pink-500">Forgot Password?</div>
      </div>
    </div>
  </div>
  )
}

export default page
