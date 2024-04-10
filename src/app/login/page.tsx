'use client'
import ButtonLink from "@/components/ButtonLink";
import { Lock, Mail, Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { SyntheticEvent, useReducer, useState } from "react";

const page = () => {
  const initialState = {
    email: "",
    mobileNumber: "",
    password: "",
   
  };
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "change":
        return {
          ...state,
          [action.key]: action.value,
        };
       
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [visiblity, setVisibility] = useState(false);
  const router=useRouter()
  const [errMsg,setErrMsg]=useState("")


  const handleSubmit = async (e: SyntheticEvent)=>{
    e.preventDefault()
    try {
      setErrMsg("")
      const res = await axios.post(`/api/auth/login`, state);
      localStorage.setItem("token", res.data.token);
      router.push("/");
    } catch (error:any) {
      setErrMsg(error.response.data.message)

    }
  }
  
  return (
    <div className="h-[calc(100vh-10rem)] flex items-center justify-center">
      <div className="w-1/4   shadow-2xl shadow-transparent/50 p-5 rounded-md">
      {errMsg && <div role="alert">
        <div className=" bg-red-100 border border-red-400 text-red-700 text-center rounded px-4 py-2">
        {errMsg}
        </div>
      </div> }
        <h1 className="text-3xl m-8 text-center text-pink-500 font-bold">
          Sign In
        </h1>
        <form onSubmit={handleSubmit}>
        <div className="relative m-6">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <Mail color="disabled" />
          </div>
          <input
            type="text"
            id="input-group-1"
            className="border text-sm rounded-lg shadow shadow-transparent/40 block w-full ps-12 p-2.5 "
            placeholder="Email or Mobile number *"
            onChange={(e) =>{
              if((/^[0-9]{10,}$/).test(e.target.value)){
                 dispatch({
                type: "change",
                key:"mobileNumber",
                value: e.target.value,
              })
              }
              else{
                dispatch({
                  type: "change",
                  key: "email",
                  value: e.target.value,
                })
              }
             
            }}
          
          />
        </div>
        <div className="relative m-6">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <Lock color="disabled" />
          </div>
          <input
            type={visiblity ? "text" : "password"}
            id="input-group-1"
            name="password"
            className="border text-sm rounded-lg shadow shadow-transparent/40 block w-full ps-12 p-2.5 "
            placeholder="Password *"
            onChange={(e) =>
              dispatch({
                type: "change",
                key: e.target.name,
                value: e.target.value,
              })
            }
          
          />
        <div
                  className="absolute inset-y-0 end-0 flex items-center pe-3.5 "
                  onClick={() => setVisibility(!visiblity)}
                >
                  {visiblity ? (
                    <VisibilityOff color="disabled" />
                  ) : (
                    <Visibility color="disabled" />
                  )}
                </div>
        </div>
        <div className="   m-6">
          <button className="border rounded-lg w-full p-2.5 bg-pink-500 text-white shadow shadow-transparent/20 ">
            Sign In
          </button>
          </div>
          </form>
          <div className="mt-8 text-center text-pink-500">Forgot Password?</div>
          <div className="mt-8 flex justify-center  text-base text-gray-400">
            Don't have an account? 
           <ButtonLink isOpen={true} isAdminLink={false} text="">
           <Link className="text-pink-500 ml-1 h-10" href="">
              {" "}
              Create one
            </Link>
           </ButtonLink>
    
           
          
        </div>
      </div>
    </div>
  );
};

export default page;
