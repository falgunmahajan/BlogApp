"use client"
import { Call, Lock, Mail, Person, Visibility, VisibilityOff } from '@mui/icons-material'
import axios from 'axios'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { SyntheticEvent, useReducer, useState } from 'react'

const page = () => {
  const role=useSearchParams().get("role")
  const initialState={
    fullName:"",
    email:"",
    mobileNumber:"",
    password:"",
    confirmPassword:"",
    role
  }
  const reducer=(state:any,action:any)=>{
    switch(action.type){
      case "change":
        return {
          ...state,[action.key]:action.value
        }
    }
    }
  const [state, dispatch] = useReducer(reducer, initialState)
  const [visiblity,setVisibility]=useState(false)
  const handleSubmit=async(e:SyntheticEvent)=>{
    e.preventDefault()
    
    
 const res = await axios.post(`/api/auth/signup`,state)
  }
  return (
    <div>
      <div className="h-[calc(100vh-10rem)] flex items-center justify-center">
      <div className="w-1/4   shadow-2xl shadow-transparent/50 p-5 rounded-md">
        <h1 className="text-3xl m-8 text-center text-pink-500 font-bold">Sign Up</h1>
        <form onSubmit={handleSubmit}>
        <div className="relative m-6">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <Person color="disabled" />
          </div>
          <input
            type="text"
            id="input-group-1"
            className="border text-sm rounded-lg shadow shadow-transparent/40 block w-full ps-12 p-2.5 "
            name="fullName"
            placeholder="Full Name"
            onChange={(e)=>dispatch({type:"change",key:e.target.name, value:e.target.value})}
          />
        </div>
        <div className="relative m-6">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <Mail color="disabled" />
          </div>
          <input
            type="text"
            id="input-group-1"
            className="border text-sm rounded-lg shadow shadow-transparent/40 block w-full ps-12 p-2.5 "
            name="email"
            placeholder="Email Address"
            onChange={(e)=>dispatch({type:"change",key:e.target.name, value:e.target.value})}
          />
        </div>
        <div className="relative m-6">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <Call color="disabled" />
          </div>
          <input
            type="text"
            id="input-group-1"
            className="border text-sm rounded-lg shadow shadow-transparent/40 block w-full ps-12 p-2.5 "
            name="mobileNumber"
            placeholder="Mobile Number"
            onChange={(e)=>dispatch({type:"change",key:e.target.name, value:e.target.value})}
          />
        </div>
        <div className="relative m-6">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <Lock color="disabled" />
          </div>
          <input
            type={visiblity?"text":"password"}
            id="input-group-1"
            className="border text-sm rounded-lg shadow shadow-transparent/40 block w-full ps-12 p-2.5 "
            name="password"
            placeholder="Password"
            onChange={(e)=>dispatch({type:"change",key:e.target.name, value:e.target.value})}
          />
          <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 " onClick={()=>setVisibility(!visiblity)}>
           {visiblity?<VisibilityOff color="disabled"/>:<Visibility color="disabled"/>}
          </div>
        </div>
        <div className="relative m-6">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <Lock color="disabled" />
          </div>
          <input
            type="password"
            id="input-group-1"
            className="border text-sm rounded-lg shadow shadow-transparent/40 block w-full ps-12 p-2.5 "
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={(e)=>dispatch({type:"change",key:e.target.name, value:e.target.value})}
          />
        </div>
        <div className="m-6">
          <button className="border rounded-lg w-full p-2.5 bg-pink-500 text-white shadow shadow-transparent/20 ">
           Sign Up
          </button>
          </div>
          </form>
          <div className="m-8 text-center text-base text-gray-400">Already have an account?<Link className="text-pink-500" href="/login"> Sign In</Link></div>
       
      </div>
    </div>
    </div>
  )
}

export default page
